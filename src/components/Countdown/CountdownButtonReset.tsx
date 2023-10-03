import { FC, memo } from "react";
import { StopCountdownButtonStyles } from "../../assets/styles/countdown.styles";
const MemoizedStopCountdownButtonStyles = memo(StopCountdownButtonStyles);
type CountdownButtonResetTypes = {
    resetCountdown: () => void;
}
const CountdownButtonReset: FC<CountdownButtonResetTypes> = ({ resetCountdown }) => {
    return (
      <MemoizedStopCountdownButtonStyles onClick={resetCountdown}>Сброс</MemoizedStopCountdownButtonStyles>
    );
  };
  
export default memo(CountdownButtonReset);