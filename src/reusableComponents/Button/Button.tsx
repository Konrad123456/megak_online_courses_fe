import {FormEvent} from "react";
import {ReusableButton} from './Button.styles';

interface IFormInputProps {
    label: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (event: FormEvent<HTMLButtonElement>) => void;
}

export const Button = ({label, onClick, type='submit'}: IFormInputProps) => {
    return <ReusableButton type={type} onClick={onClick}>{label}</ReusableButton>
}