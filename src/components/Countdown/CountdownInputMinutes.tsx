import { ChangeEvent, FC, memo } from "react";
import CountdownTitleInput from "./CountdownTitleInput";
import CountdownInput from "./CountdownInput";
import { CountdownDiv, FlexCenter } from "../../assets/styles/countdown.styles";
const MemoizedFlexCenter = memo(FlexCenter);
const MemoizedCountdownDiv = memo(CountdownDiv);
type CountdownInputMinutesTypes = {
  handleInputChange1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue1: number;
}
const CountdownInputMinutes: FC<CountdownInputMinutesTypes> = ({ handleInputChange1, inputValue1 }) => {
  return (
      <MemoizedCountdownDiv>
        <CountdownTitleInput title="Минуты"></CountdownTitleInput>
        <MemoizedFlexCenter>
        <CountdownInput handleInputChange={handleInputChange1} inputValue={inputValue1}></CountdownInput>
        </MemoizedFlexCenter>
      </MemoizedCountdownDiv>
  );
};

export default memo(CountdownInputMinutes);
