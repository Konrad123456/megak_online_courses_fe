import {Outlet} from "react-router";
import {LogInContainer, LogoText, NavigationContainer, NavigationsContainer, NavLink} from "./Navigation.styles";
import {ReactComponent as Logo} from '../../assets/logo/logo.svg';

export const Navigation = () => {
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
                <LogInContainer>
                    <NavLink to={'/signIn'}>Sing In!</NavLink>
                    <NavLink to={'/register'}>Register</NavLink>
                </LogInContainer>
            </NavigationContainer>
            <Outlet />
        </>
    )
}