import {Role, Roles} from "../../../features/auth/types";
import {IActionsProps} from "./types";

export const AdminActions: React.FC<IActionsProps> = ({user, onClick}) => {
    let links
    if (user && user.roles.some((role: Role) => role.role === Roles.ADMIN)) {
        links = [
        ];
    }
    return <>
        {links}
    </>;
}