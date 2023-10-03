import { FC, memo } from "react"
import { ButtonTimerStyles, FlexCenterStyles } from "../../assets/styles/timer.styles";
type ButtonTypes = {
    stateButton: number;
    start: () => void;
    stop: () => void;
}
const ButtonTimer: FC <ButtonTypes> = ({stateButton, start, stop}) => {
    return (
        <FlexCenterStyles>
            {
                stateButton === 0 ? (<ButtonTimerStyles  onClick={start}>Запустить</ButtonTimerStyles>)
                    : stateButton === 1 ? (<ButtonTimerStyles  onClick={stop}>Пауза</ButtonTimerStyles>)
                        : (<ButtonTimerStyles  onClick={start}>Возобновить</ButtonTimerStyles>)
            }
        </FlexCenterStyles>
    )
}
export default memo(ButtonTimer);