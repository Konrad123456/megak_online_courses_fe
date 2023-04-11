import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";
import React from "react";
import {SelectorContainer, Selector as SelectorElement, SelectorOption} from "./Selector.styles";
import {Label} from "../FormInput/FormInput.styles";
import {AvailableVariantsColor, ValidationMessage} from "../ValidationMessage/ValidationMessage";

interface IFormInput {
    label: string;
    registerObj: UseFormRegisterReturn;
    options: {value: string, optionLabel: string}[];
    multiple?: boolean;
    errorText?: string;
}

export const Selector: React.FC<IFormInput> = ({label, options, registerObj, multiple= false, errorText}) => {
    return <SelectorContainer>
        <Label htmlFor={label}>{label}</Label>
        <SelectorElement id={label} {...registerObj} multiple={multiple}>
            {options.map(({value, optionLabel}) => <SelectorOption value={value}>{optionLabel}</SelectorOption>)}
        </SelectorElement>
        {errorText && <ValidationMessage message={errorText} variant={AvailableVariantsColor.ERROR} />}
    </SelectorContainer>
}