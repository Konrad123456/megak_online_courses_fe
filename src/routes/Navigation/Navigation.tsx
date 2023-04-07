import {Outlet} from "react-router";
import {LogInContainer, LogoText, NavigationContainer, NavigationsContainer, NavLink} from "./Navigation.styles";
import {ReactComponent as Logo} from '../../assets/logo/logo.svg';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../features/auth/authSlice";

export const Navigation = () => {
    const user = useSelector(selectCurrentUser);

    return (
        <>
            <NavigationContainer>
                <Logo />
                <LogoText>MegaK Coursera</LogoText>
                <NavigationsContainer>
                    <NavLink to={'/courses'}>Courses</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/contactUs'}>Contact Us</NavLink>
                </NavigationsContainer>
                {
                    //TODO make logout button and make it prettier
                    user ?
                        <span>{user.firstName}</span> :
                        <LogInContainer>
                            <NavLink to={'/signIn'}>Sing In!</NavLink>
                            <NavLink to={'/register'}>Register</NavLink>
                        </LogInContainer>
                }
            </NavigationContainer>
            <Outlet />
        </>
    )
}