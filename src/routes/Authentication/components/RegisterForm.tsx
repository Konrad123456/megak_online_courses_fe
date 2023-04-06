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

interface CreateUserForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<CreateUserForm>();
    const onSubmit = (data: CreateUserForm) => {
        console.log(data);
    };

    return <div>
        <FormContainer>
            <Title title={'MegaK Coursera'}/>
            <InputsContainer onSubmit={handleSubmit(onSubmit)}>
                <FormInputContainer>
                    <Label htmlFor={'firstName'}>{"First Name"}</Label>
                    <Input id={'firstName'} {...register("firstName", { required: 'This is required', minLength: {value: 3, message: 'Min length 3 character'}, maxLength: {value: 60, message: 'Max length 60 characters'} })} />
                    {errors.firstName?.message ? <ValidationMessage message={errors.firstName.message} variant={AvailableVariantsColor.ERROR}/> : null}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'lastName'}>{"Last Name"}</Label>
                    <Input id={'lastName'} {...register("lastName", { required: 'This is required', minLength: {value: 3, message: 'Min length 3 character'}, maxLength: {value: 60, message: 'Max length 60 characters'} })} />
                    {errors.lastName?.message ? <ValidationMessage message={errors.lastName.message} variant={AvailableVariantsColor.ERROR} /> : null}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'email'}>{"Email"}</Label>
                    <Input id={'email'} type={'email'} {...register("email", { required: 'This is required', minLength: {value: 1, message: 'Min length 1 character'}, maxLength: {value: 255, message: 'Max length 255 characters'} })} />
                    {errors.email?.message ? <ValidationMessage message={errors.email.message} variant={AvailableVariantsColor.ERROR} /> : null}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'Password'}>{"Password"}</Label>
                    <Input id={'password'} type={'password'} {...register("password", { required: 'This is required', minLength: {value: 8, message: 'Min length 8 character'}, maxLength: {value: 60, message: 'Max length 60 characters'} })} />
                    {errors.password?.message ? <ValidationMessage message={errors.password.message} variant={AvailableVariantsColor.ERROR} /> : null}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'confirmPassword'}>{"Confirm password"}</Label>
                    <Input id={'confirmPassword'} type={'password'} {...register("confirmPassword", { required: 'This is required', minLength: {value: 8, message: 'Min length 8 character'}, maxLength: {value: 60, message: 'Max length 60 characters'} })} />
                    {errors.confirmPassword?.message ? <ValidationMessage message={errors.confirmPassword.message} variant={AvailableVariantsColor.ERROR} /> : null}
                </FormInputContainer>

                <Button label={'Register'} />
            </InputsContainer>
        </FormContainer>
        <FormFooter />
    </div>
}