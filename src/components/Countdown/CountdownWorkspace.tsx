
import { FC, memo } from "react";
import CountdownInputMinutes from "./CountdownInputMinutes";
import CountdownInputSeconds from "./CountdownInputSeconds";
import { CountdownWorkspaceGrid } from "../../assets/styles/countdown.styles";
import CountdownInputSlider from "./CountdownInputSlider";
const MemoizedCountdownWorkspaceGrid = memo(CountdownWorkspaceGrid);
type CountdownWorkspaceTypes = {
  handleInputChange1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue1: number;
  inputValue2: number;
  sliderInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CountdownWorkspace: FC<CountdownWorkspaceTypes> = ({ handleInputChange1, handleInputChange2, inputValue1, inputValue2, sliderInputChange }) => {
  return (
    <MemoizedCountdownWorkspaceGrid>
      <CountdownInputMinutes handleInputChange1={handleInputChange1} inputValue1={inputValue1}></CountdownInputMinutes>
      <CountdownInputSeconds handleInputChange2={handleInputChange2} inputValue2={inputValue2}></CountdownInputSeconds>
      <CountdownInputSlider inputValue1={inputValue1} inputValue2={inputValue2} sliderInputChange={sliderInputChange}></CountdownInputSlider>
    </MemoizedCountdownWorkspaceGrid>
  );
};

export default memo(CountdownWorkspace);