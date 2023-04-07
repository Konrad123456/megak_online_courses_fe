import {Button} from "../../../reusableComponents/Button/Button";
import {FormContainer, InputsContainer} from "./Forms.styles";
import {Title} from "./Title";
import {FormFooter} from "./FormFooter";
import {FormInputContainer, Input, Label} from "../../../reusableComponents/FormInput/FormInput.styles";
import React from "react";
import {useForm} from "react-hook-form";
import {useLocation} from "react-router";
import {
    ValidationMessage
} from "../../../reusableComponents/ValidationMessage/ValidationMessage";

interface LogInUserData {
    email: string;
    password: string;
}

export const LogInForm = () => {
    const {register, handleSubmit} = useForm<LogInUserData>();
    const location = useLocation();

    const onSubmit = (data: LogInUserData) => {
        console.log(data)
    };

    return <div>
        <FormContainer>
            <Title title={'MegaK Coursera'}/>
            <InputsContainer onSubmit={handleSubmit(onSubmit)}>
                <FormInputContainer>
                    <Label htmlFor={'email'}>{"Email"}</Label>
                    <Input id={'email'} {...register("email")} />
                </FormInputContainer>
                <FormInputContainer>
                    <Label htmlFor={'userPassword'}>{"Password"}</Label>
                    <Input id={'userPassword'} type={'password'} {...register("password")} />
                </FormInputContainer>
                <Button label={'Log In'} onClick={() => console.log(true)}/>
                {
                    location.state &&
                    <FormInputContainer>
                        <ValidationMessage message={location.state?.success} />
                    </FormInputContainer>
                }
            </InputsContainer>
        </FormContainer>
        <FormFooter />
    </div>
}