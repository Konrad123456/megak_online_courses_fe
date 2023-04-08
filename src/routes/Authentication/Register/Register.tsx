import {RegisterForm} from "../components/RegisterForm";
import {Aside} from "../components/Aside";
import {AuthContainer} from "../components/AuthContainer";

export const Register = () => {
    return <AuthContainer>
        <RegisterForm />
        <Aside />
    </AuthContainer>
}