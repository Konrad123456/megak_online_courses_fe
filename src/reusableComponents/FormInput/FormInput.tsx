import {FormInputContainer, Input, Label} from "./FormInput.styles";
import React, {HTMLInputTypeAttribute} from "react";
import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";
import {AvailableVariantsColor, ValidationMessage} from "../ValidationMessage/ValidationMessage";

interface IFormInput {
    label: string;
    registerObj: UseFormRegisterReturn;
    type?: HTMLInputTypeAttribute;
    errorText?: string;
}

export const FormInput: React.FC<IFormInput> = ({registerObj, label, type, errorText}) => {
    return (
        <FormInputContainer>
            <Label htmlFor={label}>{label}</Label>
            <Input id={label} type={type} {...registerObj} />
            {errorText && <ValidationMessage message={errorText} variant={AvailableVariantsColor.ERROR} />}
        </FormInputContainer>
    )
}