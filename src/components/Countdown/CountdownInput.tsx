import { FC, memo } from "react";
import { WorkspaceInput } from "../../assets/styles/countdown.styles";
const MemoizedWorkspaceInput = memo(WorkspaceInput);
type CountdownInputTypes = {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue: number;
}
const CountdownInput: FC<CountdownInputTypes> = ({ handleInputChange, inputValue }) => {
    return (
        <MemoizedWorkspaceInput type="number" className="input-time" value={inputValue} max='60' onChange={handleInputChange} />
    );
};

export default memo(CountdownInput);