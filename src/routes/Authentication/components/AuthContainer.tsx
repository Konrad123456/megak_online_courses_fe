import {LogInContainer} from "./AuthContainer.styles";
import React from "react";

interface ILogInContainerProps {
    children: React.ReactNode
}

export const AuthContainer: React.FC<ILogInContainerProps> = ({children}) => {
    return <LogInContainer>
        {children}
    </LogInContainer>
}