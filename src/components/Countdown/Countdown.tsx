import { memo } from "react";
import useHelpCountdown from "../../hooks/useHelpCountdown";
import CountdownButton from "./CountdownButton";
import CountdownButtonReset from "./CountdownButtonReset";
import CountdownVisualization from "./CountdownVisualization";
import CountdownWorkspace from "./CountdownWorkspace";
import { CountdownBorder, CountdownTitle } from "../../assets/styles/countdown.styles";
const MemoizedCountdownTitle = memo(CountdownTitle);
const MemoizedCountdownBorder = memo(CountdownBorder);
const Countdown = () => {
    const {
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
        inputValue1,
        inputValue2,
        stateCountdown,
        stateButtonCountdown
    } = useHelpCountdown();
    return (
        <MemoizedCountdownBorder>
            <MemoizedCountdownTitle>Countdown</MemoizedCountdownTitle>
            {stateCountdown ? (
                <CountdownWorkspace
                    handleInputChange1={handleInputChange1}
                    handleInputChange2={handleInputChange2}
                    inputValue1={inputValue1}
                    inputValue2={inputValue2}
                    sliderInputChange={sliderInputChange}
                />
            ) : (
                <CountdownVisualization
                    transformCountdown={transformCountdown}
                    calculateProgress={calculateProgress}
                    secondsCountdown={secondsCountdown}
                    inputValue1={inputValue1}
                    inputValue2={inputValue2} />
            )}
            <CountdownButton
                stateButtonCountdown={stateButtonCountdown}
                startCountdown={startCountdown}
                stopCountdown={stopCountdown} stateLogickButton={stateLogickButton}                ></CountdownButton>
            <CountdownButtonReset
                resetCountdown={resetCountdown}></CountdownButtonReset>
        </MemoizedCountdownBorder>
    )
}
export default memo(Countdown);