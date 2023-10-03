import { memo } from "react";
import { FlexCenterStyles, TimerBorder, TitleStyles } from "../../assets/styles/timer.styles";
import useHelpTimer from "../../hooks/useHelpTimer";
import ButtonTimer from "./ButtonTimer";
import ButtonTimerReset from "./ButtonTimerReset";
import TimerCount from "./TimerCount";
const MemoTitleStyles = memo(TitleStyles)

const Timer = () => {
    const { start, stop, reset, transform, stateButton } = useHelpTimer();
    return (
        <div>
            <TimerBorder>
                <MemoTitleStyles>Timer</MemoTitleStyles>
                <TimerCount transform={transform} ></TimerCount>
                <FlexCenterStyles>
                    <ButtonTimer start={start} stop={stop} stateButton={stateButton} ></ButtonTimer>
                    <ButtonTimerReset reset={reset} ></ButtonTimerReset>
                </FlexCenterStyles>
            </TimerBorder>
        </div>
    )
}
export default Timer;