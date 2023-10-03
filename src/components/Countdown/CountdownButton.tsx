import { FC, memo } from "react";
import { CountdownButtonStyles } from "../../assets/styles/countdown.styles";
const MemoizedCountdownButtonStyles = memo(CountdownButtonStyles);
type CountdownButtonTypes = {
    stateButtonCountdown: number;
    startCountdown: () => void;
    stopCountdown: () => void;
    stateLogickButton: boolean,
};

const CountdownButton: FC<CountdownButtonTypes> = ({
    stateButtonCountdown,
    startCountdown,
    stopCountdown,
    stateLogickButton,
}) => {
    return (
        <div>
            {stateButtonCountdown === 0 ? (
                <MemoizedCountdownButtonStyles onClick={startCountdown} disabled={stateLogickButton}>Запустить</MemoizedCountdownButtonStyles>
            ) : stateButtonCountdown === 1 ? (
                <MemoizedCountdownButtonStyles onClick={stopCountdown}>Пауза</MemoizedCountdownButtonStyles>
            ) : stateButtonCountdown === 2 ? (
                <MemoizedCountdownButtonStyles onClick={startCountdown}>Возобновить</MemoizedCountdownButtonStyles>
            ) : null}
        </div>
    );
};
export default memo(CountdownButton);