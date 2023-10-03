import {  FC, memo } from "react";
import CountdownTitleInput from "./CountdownTitleInput";
import CountdownInput from "./CountdownInput";
import { CountdownDiv, FlexCenter } from "../../assets/styles/countdown.styles";
const MemoizedFlexCenter = memo(FlexCenter);
const MemoizedCountdownDiv = memo(CountdownDiv);
type CountdownInputSecondsTypes = {
  handleInputChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue2: number;
}
const CountdownInputSeconds: FC<CountdownInputSecondsTypes> = ({ handleInputChange2, inputValue2 }) => {
  return (
      <MemoizedCountdownDiv>
        <CountdownTitleInput title="Секунды"></CountdownTitleInput>
        <MemoizedFlexCenter>
          <CountdownInput handleInputChange={handleInputChange2} inputValue={inputValue2}></CountdownInput>
        </MemoizedFlexCenter>
      </MemoizedCountdownDiv>
  );
};

export default memo(CountdownInputSeconds);