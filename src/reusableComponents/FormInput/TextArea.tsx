import {FormInputContainer, Input, Label} from "./FormInput.styles";
import React from "react";
import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";
import {AvailableVariantsColor, ValidationMessage} from "../ValidationMessage/ValidationMessage";
import {TextAreaInput} from "./TextArea.styles";

interface IFormInput {
    label: string;
    registerObj: UseFormRegisterReturn;
    errorText?: string;
}

export const TextArea: React.FC<IFormInput> = ({registerObj, label, errorText}) => {
    return (
        <FormInputContainer>
            <Label htmlFor={label}>{label}</Label>
            <TextAreaInput id={label} {...registerObj} />
            {errorText && <ValidationMessage message={errorText} variant={AvailableVariantsColor.ERROR} />}
        </FormInputContainer>
    )
}