import {LogInContainer} from "./LogIn.styles";
import {LogInForm} from "../components/LogInForm";
import {Aside} from "../components/Aside";

export const LogIn = () => {
    return <LogInContainer>
        <LogInForm />
        <Aside />
    </LogInContainer>
}