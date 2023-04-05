import {FormEvent} from "react";
import {ReusableButton} from './Button.styles';

interface IFormInputProps {
    label: string;
    onClick: (event: FormEvent<HTMLButtonElement>) => void;
}

export const Button = ({label, onClick}: IFormInputProps) => {
    return <ReusableButton onClick={onClick}>{label}</ReusableButton>
}