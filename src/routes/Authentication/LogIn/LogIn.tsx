import {LogInForm} from "../components/LogInForm";
import {Aside} from "../components/Aside";
import {AuthContainer} from "../components/AuthContainer";

export const LogIn = () => {
    return <AuthContainer>
        <LogInForm />
        <Aside />
    </AuthContainer>
}