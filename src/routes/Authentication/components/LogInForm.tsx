import {FormTitle, LogInFooter, LogInFormContainer, LogInInputsContainer} from "../LogIn.styles";
import FormInput from "../../../reusableComponents/FormInput/FormInput";
import {Button} from "../../../reusableComponents/Button/Button";

export const LogInForm = () => {
    return <div>
        <LogInFormContainer>
            <FormTitle>MegaK Coursera</FormTitle>
            <LogInInputsContainer>
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
                <Button label={'Log In'} onClick={() => console.log(true)}/>
            </LogInInputsContainer>
        </LogInFormContainer>
        <LogInFooter>
            <p>Copyright © 2022 - 2030 Konrad Cencelewicz. All rights reserved.</p>
        </LogInFooter>
    </div>
}