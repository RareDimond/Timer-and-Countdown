import { Field } from "./assets/styles/timer.styles";
import Countdown from "./components/Countdown/Countdown";
import Timer from "./components/Timer/Timer";

function App() {
    return (
        <Field>
            <Timer/>
            <Countdown/>
        </Field>
      );
}

export default App;