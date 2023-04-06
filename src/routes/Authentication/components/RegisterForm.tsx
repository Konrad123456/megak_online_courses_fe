import {Button} from "../../../reusableComponents/Button/Button";
import {FormContainer, InputsContainer} from "./Forms.styles";
import {FormFooter} from "./FormFooter";
import {Title} from "./Title";
import {useForm} from "react-hook-form";
import {FormInputContainer, Input, Label} from "../../../reusableComponents/FormInput/FormInput.styles";
import React from "react";
import {ValidationMessage} from "../../../reusableComponents/ValidationMessage/ValidationMessage";

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
        console.log(data)
    };

    return <div>
        <FormContainer>
            <Title title={'MegaK Coursera'}/>
            <InputsContainer onSubmit={handleSubmit(onSubmit)}>
                <FormInputContainer>
                    <Label htmlFor={'firstName'}>{"First Name"}</Label>
                    <Input id={'firstName'} {...register("firstName", { required: true, minLength: 3, maxLength: 60 })} />
                    {errors.firstName?.message ? <ValidationMessage message={errors.firstName.message} /> : <p>Niema</p>}
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'lastName'}>{"Last Name"}</Label>
                    <Input id={'lastName'} {...register("lastName", { required: true, minLength: 1, maxLength: 60 })} />
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'email'}>{"Email"}</Label>
                    <Input id={'email'} type={'email'} {...register("email", { required: true, minLength: 1, maxLength: 255 })} />
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'Password'}>{"Password"}</Label>
                    <Input id={'password'} type={'password'} {...register("password", { required: true, minLength: 8, maxLength: 60 })} />
                </FormInputContainer>

                <FormInputContainer>
                    <Label htmlFor={'confirmPassword'}>{"Confirm password"}</Label>
                    <Input id={'confirmPassword'} type={'password'} {...register("confirmPassword", { required: true, minLength: 8, maxLength: 60 })} />
                </FormInputContainer>

                <Button label={'Register'} />
            </InputsContainer>
        </FormContainer>
        <FormFooter />
    </div>
}