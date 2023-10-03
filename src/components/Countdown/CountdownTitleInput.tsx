import {  FC, memo } from "react";
import { FlexCenter } from "../../assets/styles/countdown.styles";
const MemoizedFlexCenter = memo(FlexCenter);
type CountdownTitleInputTypes = {
  title:string
}
const CountdownTitleInput: FC<CountdownTitleInputTypes> = memo(({ title }) => {
  return (
    <MemoizedFlexCenter>{title}</MemoizedFlexCenter>
  );
});

export default memo(CountdownTitleInput);