import { FC, memo } from "react"
import { FlexCenterStyles, StopButtonTimerStyles } from "../../assets/styles/timer.styles";
type ButtonResetTypes = {
    reset: () => void;
}
const ButtonTimerReset: FC <ButtonResetTypes> = ({reset}) => {
    return (
        <FlexCenterStyles>
           <StopButtonTimerStyles onClick={reset}>Сброс</StopButtonTimerStyles>
        </FlexCenterStyles>
    )
}
export default memo(ButtonTimerReset);