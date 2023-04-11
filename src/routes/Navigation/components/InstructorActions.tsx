import {ListElement} from "./UserMenu.styles";
import {Role, Roles} from "../../../features/auth/types";
import {IActionsProps} from "./types";

export const InstructorActions: React.FC<IActionsProps> = ({user, onClick}) => {
    let links
    if (user && user.roles.some((role: Role) => role.role === Roles.INSTRUCTOR)) {
        links = [
            <ListElement to={'/courses/add-course'} onClick={onClick}>Add New Course</ListElement>,
            <ListElement to={'/courses/instructors'} onClick={onClick}>My courses</ListElement>,
        ];
    }
    return <>
        {links}
    </>;
}