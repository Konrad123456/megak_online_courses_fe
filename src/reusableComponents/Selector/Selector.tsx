import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";
import React from "react";

interface IFormInput {
    label: string;
    registerObj: UseFormRegisterReturn;
    options: {value: string, optionLabel: string}[];
    errorText?: string;
}

export const Selector: React.FC<IFormInput> = ({label, options, registerObj, errorText}) => {
    return <div>
        <label htmlFor={label}>{label}</label>
        <select id={label} {...registerObj}>
            {options.map(({value, optionLabel}) => <option value={value}>{optionLabel}</option>)}
        </select>
    </div>
}