import {FormTitle} from "./Title.styles";

interface ITitleProps {
    title: string;
}

export const Title = ({title}: ITitleProps) => {
    return <FormTitle>{title}</FormTitle>
}