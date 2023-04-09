import {User} from "../../../features/auth/types";

export interface IActionsProps {
    user: User;
    onClick: () => void,
}