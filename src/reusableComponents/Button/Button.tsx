import {FormEvent} from "react";
import {ReusableButton} from './Button.styles';
import {ProgressCircular} from "../ProgressCircural/ProgressCircular";

interface IFormInputProps {
    label: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (event: FormEvent<HTMLButtonElement>) => void;
    isLoading?: boolean;
}

export const Button = ({label, onClick, type='submit', isLoading=false}: IFormInputProps) => {
    return <ReusableButton type={type} onClick={onClick}>
        {
            isLoading ?
            <ProgressCircular /> :
            label
        }
    </ReusableButton>
}