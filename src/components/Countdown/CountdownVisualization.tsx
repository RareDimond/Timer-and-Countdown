import { FC, memo } from "react";
import { CountdownNumberProgress, CountdownNumberVisual, CountdownVisualizationGrid } from "../../assets/styles/countdown.styles";
const MemoizedCountdownNumberProgress = memo(CountdownNumberProgress);
const MemoizedCountdownNumberVisual = memo(CountdownNumberVisual);
const MemoizedCountdownVisualizationGrid = memo(CountdownVisualizationGrid);
type CountdownVisualizationTypes = {
    transformCountdown: (totalSeconds: number) => JSX.Element;
    calculateProgress: (inputValue1: number, inputValue2: number) => number;
    secondsCountdown: number;
    inputValue1: number;
    inputValue2: number;
}
const CountdownVisualization: FC<CountdownVisualizationTypes> = ({ transformCountdown, calculateProgress, secondsCountdown, inputValue1, inputValue2 }) => {
    return (
        <MemoizedCountdownVisualizationGrid>
            <MemoizedCountdownNumberVisual>{transformCountdown(secondsCountdown)}</MemoizedCountdownNumberVisual>
            <MemoizedCountdownNumberProgress><progress value={calculateProgress(inputValue1, inputValue2)} max="100"></progress>
                <span> {`${calculateProgress(inputValue1, inputValue2).toFixed(0)}%`}</span>
            </MemoizedCountdownNumberProgress>
        </MemoizedCountdownVisualizationGrid>
    );
};

export default memo(CountdownVisualization);