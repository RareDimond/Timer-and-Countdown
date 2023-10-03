import { FC } from "react";
import { TimerNumberCountdown } from "../../assets/styles/timer.styles";

type TimerTransform = {
    transform: () => string;
}
const TimerCount:FC<TimerTransform> = ({transform}) => {
    return (
        <TimerNumberCountdown >{transform()}</TimerNumberCountdown>
    )
}
export default TimerCount;