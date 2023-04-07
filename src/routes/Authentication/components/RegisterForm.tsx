import {Button} from "../../../reusableComponents/Button/Button";
import {FormContainer, InputsContainer} from "./Forms.styles";
import {FormFooter} from "./FormFooter";
import {Title} from "./Title";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {zodResolver} from '@hookform/resolvers/zod';
import {registerUserSchema} from "../ValidationSchemas/ValidationSchemas";
import {useNavigate} from "react-router";
import {FormInput} from "../../../reusableComponents/FormInput/FormInput";
import {urlConfig} from "../../../config/url.config";
import {
    AvailableVariantsColor,
    ValidationMessage
} from "../../../reusableComponents/ValidationMessage/ValidationMessage";
import {FormInputContainer} from "../../../reusableComponents/FormInput/FormInput.styles";

interface CreateUserForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterForm = () => {
    const [error, setError] = useState({
        isError: false,
        errorMessage: '',
    });
    const navigation = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<CreateUserForm>({
        resolver: zodResolver(registerUserSchema),
    });

    const onSubmit = async (data: CreateUserForm) => {
        const {firstName, lastName, email, password} = data;
        const responseData = await fetch(urlConfig.baseUrl + '/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            })
        });
        const decodedData = await responseData.json();
        if(responseData.ok) {
            navigation('/signIn', {state: {success: 'Account created successfully. Now you can log in!'}});
            setError({isError: false, errorMessage: ''});
        } else {
            setError({isError: true, errorMessage: decodedData.message.join('\n')});
            console.log('Something went wrong');
        }
    };

    return <div>
        <FormContainer>
            <Title title={'MegaK Coursera'}/>
            <InputsContainer onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label={'First name'}
                    registerObj={{...register('firstName')}}
                    errorText={errors.firstName?.message}
                />
                <FormInput
                    label={'Last name'}
                    registerObj={{...register('lastName')}}
                    errorText={errors.lastName?.message}
                />
                <FormInput
                    label={'Email'}
                    type={'email'}
                    registerObj={{...register('email')}}
                    errorText={errors.email?.message}
                />
                <FormInput
                    label={'Password'}
                    type={'password'}
                    registerObj={{...register('password')}}
                    errorText={errors.password?.message}
                />
                <FormInput
                    label={'Confirm password'}
                    type={'password'}
                    registerObj={{...register('confirmPassword')}}
                    errorText={errors.confirmPassword?.message}
                />
                <Button label={'Register'} />
                {
                    error.isError &&
                    <FormInputContainer>
                        <ValidationMessage message={error.errorMessage} variant={AvailableVariantsColor.ERROR} />
                    </FormInputContainer>
                }
            </InputsContainer>
        </FormContainer>
        <FormFooter />
    </div>
}