import {  FC, memo } from "react";
import { WorkspaceSlider, WorkspaceSliderInput } from "../../assets/styles/countdown.styles";
const MemoizedWorkspaceSlider = memo(WorkspaceSlider);
const MemoizedWorkspaceSliderInput = memo(WorkspaceSliderInput);
type CountdownInputSliderTypes = {
  inputValue1: number;
  inputValue2: number;
  sliderInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CountdownInputSlider: FC<CountdownInputSliderTypes> = ({ inputValue1, inputValue2, sliderInputChange }) => {
  return (
      <MemoizedWorkspaceSlider>
        <MemoizedWorkspaceSliderInput
          type="range"
          step={15}
          min="0"
          max="3600"
          value={(inputValue1 * 60) + inputValue2}
          onChange={sliderInputChange}
        />
      </MemoizedWorkspaceSlider>
  );
};

export default memo(CountdownInputSlider);