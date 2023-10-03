import { useCallback, useState, useEffect } from "react";
const useHelpCountdown = () => {
    const [countdownIntervalId, setCountdownIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [inputValue1, setInputValue1] = useState<number>(0);
    const [inputValue2, setInputValue2] = useState<number>(0);
    const [stateCountdown, setStateCountdown] = useState<boolean>(true)
    const [stateLogickButton, setstateLogickButton] = useState<boolean>(true)
    const [stateButtonCountdown, setStateButtonCountdown] = useState<number>(0)
    const [secondsCountdown, setSecondsCountdown] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(-1);
    useEffect(()=>{
        if (inputValue1 === 0 && inputValue2 === 0) {
            setstateLogickButton(true)
        }
        else {
            setstateLogickButton(false)
        }
    },[inputValue1,inputValue2])
    useEffect(() => {
        let countdownIntervalId: NodeJS.Timeout | null = null;

        if (stateCountdown === false && (stateButtonCountdown === 1 || stateButtonCountdown === 3)) {
            if (remainingSeconds === -1) {
                const totalSeconds = inputValue1 * 60 + inputValue2;
                setSecondsCountdown(totalSeconds);
                setRemainingSeconds(totalSeconds);
            }
            countdownIntervalId = setInterval(() => {
                setSecondsCountdown((prevCount: number) => {
                    if (prevCount === 0) {
                        clearInterval(countdownIntervalId!);
                        countdownIntervalId = null;
                        setRemainingSeconds(-1);
                        setStateCountdown(true);
                        setStateButtonCountdown(0);
                        return 0;
                    } else {
                        setRemainingSeconds(prevCount - 1);
                        return prevCount - 1;
                    }
                });
            }, 1000);
            setStateButtonCountdown(1);
        } else if (remainingSeconds === 0) {
            clearInterval(countdownIntervalId!);
            countdownIntervalId = null;
            setStateCountdown(true);
            setStateButtonCountdown(0);
        } else if (stateButtonCountdown === 2) {
            clearInterval(countdownIntervalId!);
            countdownIntervalId = null;
            setStateButtonCountdown(2);
        }

        return () => {
            clearInterval(countdownIntervalId!);
            countdownIntervalId = null;
        };
    }, [stateCountdown, stateButtonCountdown, inputValue1, inputValue2, remainingSeconds]);
    const startCountdown = useCallback(() => {
        setStateButtonCountdown(1);
        setStateCountdown(false);
    }, [])

    const stopCountdown = useCallback(() => {
        setStateButtonCountdown(2);
    }, []);

    const resetCountdown = useCallback(() => {
        if (countdownIntervalId) {
            clearInterval(countdownIntervalId);
            setCountdownIntervalId(null);
            setStateCountdown(true);
        }
        setSecondsCountdown(0)
        setInputValue1(0);
        setInputValue2(0);
        setStateButtonCountdown(0);
        setStateCountdown(true);
        setRemainingSeconds(-1);
    }, [countdownIntervalId])
    const handleInputChange1 = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(event.target.value);
        if (inputValue <= 720 && inputValue >= 0) {
            setInputValue1(inputValue);
        }
    }, []);

    const handleInputChange2 = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(event.target.value);
        if (inputValue <= 59 && inputValue >= 0) {
            setInputValue2(inputValue);
        }
    }, []);




    const transformCountdown = useCallback((totalSeconds: number) => {
        return (
            <div>{Math.floor(totalSeconds / 60).toString().padStart(2, '0')}:{(totalSeconds % 60).toString().padStart(2, '0')}</div>
        );
    }, [])
    const sliderInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const totalValue = Number(event.target.value);
        const minutes = Math.floor(totalValue / 60);
        const secondsx = totalValue % 60;
        setInputValue1(minutes);
        setInputValue2(secondsx);
    }, []);
    const calculateProgress = useCallback((inputValue1: number, inputValue2: number) => {
        const totalSeconds = inputValue1 * 60 + inputValue2;
        if (remainingSeconds === -1) return 0;
        else return ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
    }, [remainingSeconds]);
    return {
        handleInputChange1,
        handleInputChange2,
        startCountdown,
        stopCountdown,
        resetCountdown,
        transformCountdown,
        sliderInputChange,
        calculateProgress,
        stateLogickButton,
        secondsCountdown,
        remainingSeconds,
        countdownIntervalId,
        inputValue1,
        inputValue2,
        stateCountdown,
        stateButtonCountdown
    }
}
export default useHelpCountdown;