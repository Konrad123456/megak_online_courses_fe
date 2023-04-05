import {FormEvent, useState} from 'react';
import {FormInputContainer, Input, Label} from "./FormInput.styles";

interface IFormInputProps {
    label: string;
    name: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
}

const FormInput = ({label, type='text', name, value='', onChange}: IFormInputProps) => {
    const [inputValue, setInputValue] = useState(value);

    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    return <FormInputContainer>
        <Label htmlFor={name}>{label}</Label>
        <Input
            id={name}
            type={type}
            value={inputValue}
            onChange={onChangeHandler}
            placeholder={label}
        />
    </FormInputContainer>
}

export default FormInput;