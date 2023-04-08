import {User} from "../../../features/auth/types";
import {ReactComponent as UserLogo} from '../../../assets/imgs/user.svg';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {logOut} from "../../../features/auth/authSlice";
import {useLogoutMutation} from "../../../app/api/authApiSlice";
import {ListElement, ListMenu, MenuContainer, SettingsContainer, UserName} from "./UserMenu.styles";
import {useNavigate} from "react-router";

interface IUserMenuProps {
    user: User,
}

export const UserMenu: React.FC<IUserMenuProps> = ({user}) => {
    const [isVisable, setIsVisable] = useState(false);
    const [logout, { isLoading }] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const visableChange = () => {
        setIsVisable(prev => !prev)
    }

    const logOutClick = async () => {
        await logout({}).unwrap();
        dispatch(logOut());
        navigate('/');
    }

    return <MenuContainer>
        <SettingsContainer onClick={visableChange}>
            <UserLogo />
            <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
        </SettingsContainer>
        {isVisable && <ListMenu>
            <ListElement>Settings</ListElement>
            <ListElement onClick={logOutClick}>Log Out!</ListElement>
        </ListMenu>}
    </MenuContainer>
}