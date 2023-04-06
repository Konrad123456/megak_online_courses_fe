import React from "react";

type AvailableVariants = 'success' | 'warning' | 'error';

interface IValidationMessageProps {
    message: string;
    variant?: AvailableVariants;
}

export const ValidationMessage: React.FC<IValidationMessageProps> = ({message, variant= 'success'}) => {
    return <p>{message}</p>
}