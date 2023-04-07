import {Button} from "../../../reusableComponents/Button/Button";
import {FormContainer, InputsContainer} from "./Forms.styles";
import {Title} from "./Title";
import {FormFooter} from "./FormFooter";
import {FormInputContainer} from "../../../reusableComponents/FormInput/FormInput.styles";
import React from "react";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router";
import {
    ValidationMessage
} from "../../../reusableComponents/ValidationMessage/ValidationMessage";
import {FormInput} from "../../../reusableComponents/FormInput/FormInput";
import {useLoginMutation} from "../../../app/api/authApiSlice";
import {useDispatch} from "react-redux";
import { setCredentials } from "../../../features/auth/authSlice";

interface LogInUserData {
    email: string;
    password: string;
}

export const LogInForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LogInUserData>();
    const location = useLocation();
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data: LogInUserData) => {
        console.log(data);
        const { email, password } = data;
        try {
            const userData = await login({username: email, password}).unwrap();
            console.log(userData);
            dispatch(setCredentials(userData));
            navigate('/');
        } catch (e) {
            console.log('Fail');
        }

    };

    return <div>
        <FormContainer>
            <Title title={'MegaK Coursera'}/>
            <InputsContainer onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label={'Email'}
                    registerObj={{...register("email")}}
                    errorText={errors.email?.message}
                />
                <FormInput
                    label={'Password'}
                    type={'password'}
                    registerObj={{...register("password")}}
                    errorText={errors.password?.message}
                />
                <Button label={'Log In'} />
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