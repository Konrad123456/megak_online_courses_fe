import FormInput from "../../../reusableComponents/FormInput/FormInput";
import {Button} from "../../../reusableComponents/Button/Button";
import {LogInFormContainer, LogInInputsContainer} from "./LogInForm.styles";
import {FormFooter} from "./FormFooter";
import {Title} from "./Title";

export const RegisterForm = () => {
    return <div>
        <LogInFormContainer>
            <LogInInputsContainer>
                <Title title={'MegaK Coursera'}/>
                <FormInput
                    name={'email'}
                    type={'email'}
                    label={"Email"}
                    onChange={() => console.log(true)}
                />
                <FormInput
                    name={'userPassword'}
                    type={'password'}
                    label={"Password"}
                    onChange={() => console.log(false)}
                />
                <FormInput
                    name={'userConfirmPassword'}
                    type={'password'}
                    label={"Confirm password"}
                    onChange={() => console.log(false)}
                />
                <Button label={'Register'} onClick={() => console.log(true)}/>
            </LogInInputsContainer>
        </LogInFormContainer>
        <FormFooter />
    </div>
}