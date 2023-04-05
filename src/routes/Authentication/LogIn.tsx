import {LogInContainer} from "./LogIn.styles";
import {LogInForm} from "./components/LogInForm";
import {LogInAside} from "./components/LogInAside";

export const LogIn = () => {
    return <LogInContainer>
        <LogInForm />
        <LogInAside />
    </LogInContainer>
}