import {Outlet} from "react-router";
import {LogInContainer, LogoText, NavigationContainer, NavigationsContainer, NavLink} from "./Navigation.styles";
import {ReactComponent as Logo} from '../../assets/logo/logo.svg';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../features/auth/authSlice";
import {UserMenu} from "./components/UserMenu";

export const Navigation = () => {
    const user = useSelector(selectCurrentUser);

    return (
        <>
            <NavigationContainer>
                <Logo />
                <LogoText>
                    <NavLink to={'/'}>MegaK Coursera</NavLink>
                </LogoText>
                <NavigationsContainer>
                    {user ? <NavLink to={'/courses'}>Courses</NavLink> : null}
                    {/*<NavLink to={'/about'}>About</NavLink>*/}
                    {/*<NavLink to={'/contactUs'}>Contact Us</NavLink>*/}
                </NavigationsContainer>
                {
                    user ?
                        <UserMenu user={user}/> :
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