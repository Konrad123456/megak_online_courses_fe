import {LogInContainer} from "../LogIn/LogIn.styles";
import {RegisterForm} from "../components/RegisterForm";
import {Aside} from "../components/Aside";

export const Register = () => {
    return <LogInContainer>
        <RegisterForm />
        <Aside />
    </LogInContainer>
}