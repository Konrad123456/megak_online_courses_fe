import React from "react";
import {ValidationMessageText} from "./ValidationMessage.styles";

type AvailableVariants = 'success' | 'warning' | 'error';
export enum AvailableVariantsColor {
    SUCCESS ='success',
    WARNING ='warning',
    ERROR ='error',
}

interface IValidationMessageProps {
    message: string;
    variant?: AvailableVariantsColor;
}

export const ValidationMessage: React.FC<IValidationMessageProps> = ({message, variant= AvailableVariantsColor.SUCCESS}) => {
    let bgcColor;
    switch (variant) {
        case AvailableVariantsColor.ERROR: {
            bgcColor = '#ec5a77';
            break;
        }
        case AvailableVariantsColor.WARNING: {
            bgcColor = 'yellow';
            break;
        }
        case AvailableVariantsColor.SUCCESS:
        default: {
            bgcColor = 'green';
        }
    }

    return <ValidationMessageText style={{backgroundColor: bgcColor}}>
        {message}
    </ValidationMessageText>
}