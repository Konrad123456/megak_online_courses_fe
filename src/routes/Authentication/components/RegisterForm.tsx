import {Button} from "../../../reusableComponents/Button/Button";
import {FormContainer, InputsContainer} from "./Forms.styles";
import {FormFooter} from "./FormFooter";
import {Title} from "./Title";
import {useForm} from "react-hook-form";
import {FormInputContainer, Input, Label} from "../../../reusableComponents/FormInput/FormInput.styles";
import React from "react";
import {
    AvailableVariantsColor,
    ValidationMessage
} from "../../../reusableComponents/ValidationMessage/ValidationMessage";
import { zodResolver } from '@hookform/resolvers/zod';
import {registerUserSchema} from "../ValidationSchemas/ValidationSchemas";
import {useNavigate} from "react-router";

interface CreateUserForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<CreateUserForm>({
        resolver: zodResolver(registerUserSchema),
    });
    const navigation = useNavigate();

    const onSubmit = async (data: CreateUserForm) => {
        const {firstName, lastName, email, password} = data;
        const responseData = await fetch('http://localhost:8000/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            })
        });
        if(responseData.ok) {
            navigation('/signIn', {state: {success: 'Account created successfully. Now you can log in!'}});
        } else {
            console.log('Something went wrong');
        }
    };

    return <div>
        <FormContainer>
            <Title title={'MegaK Coursera'}/>
            <InputsContainer onSubmit={handleSubmit(onSubmit)}>
                <FormInputContainer>
                    <Label htmlFor={'firstName'}>{"First Name"}</Label>
                    <Input id={'firstName'} {...register("firstName")} />
                    {errors.firstName?.message ? <ValidationMessage message={errors.firstName.message} variant={AvailableVariantsColor.ERROR}/> : null}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'lastName'}>{"Last Name"}</Label>
                    <Input id={'lastName'} {...register("lastName")} />
                    {errors.lastName?.message ? <ValidationMessage message={errors.lastName.message} variant={AvailableVariantsColor.ERROR} /> : null}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'email'}>{"Email"}</Label>
                    <Input id={'email'} type={'email'} {...register("email")} />
                    {errors.email?.message ? <ValidationMessage message={errors.email.message} variant={AvailableVariantsColor.ERROR} /> : null}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'Password'}>{"Password"}</Label>
                    <Input id={'password'} type={'password'} {...register("password")} />
                    {errors.password?.message ? <ValidationMessage message={errors.password.message} variant={AvailableVariantsColor.ERROR} /> : null}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'confirmPassword'}>{"Confirm password"}</Label>
                    <Input id={'confirmPassword'} type={'password'} {...register("confirmPassword")} />
                    {errors.confirmPassword?.message ? <ValidationMessage message={errors.confirmPassword.message} variant={AvailableVariantsColor.ERROR} /> : null}
                </FormInputContainer>

                <Button label={'Register'} />
            </InputsContainer>
        </FormContainer>
        <FormFooter />
    </div>
}