import { Outlet } from "react-router";
import { Navigation } from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { useAuthenticatedMutation, useRefreshMutation } from "../../app/api/authApiSlice";
import { useGetCategoriesMutation } from "../../app/api/coursesApiSlice";
import { useEffect } from "react";
import { setCategories } from "../../features/categories/categoriesSlice";
import { ChildrenContainer } from "./Layout.styles";
import { setCredentials } from "../../features/auth/authSlice";

export const Layout = () => {
    const user = useSelector(selectCurrentUser);
    const [refresh] = useRefreshMutation();
    const [authenticated] = useAuthenticatedMutation();
    const [categories] = useGetCategoriesMutation();

    const dispatch = useDispatch();

    useEffect(() => {
       const checkLogIn = async () => {
          const isAuthenticated = await authenticated({}).unwrap();
          if(user === null) {
            if(isAuthenticated) {
                const userData = await refresh({});
                console.log(userData);
                //@ts-ignore
                if (userData.data) {
                   //@ts-ignore
                   dispatch(setCredentials(userData.data))
                }
            }
          }
       }
        checkLogIn();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = await categories({}).unwrap();
            dispatch(setCategories(categoriesData));
        }
        fetchCategories();
    }, [])
    
    return (
        <>
            <Navigation />
            <ChildrenContainer>
                <Outlet />
            </ChildrenContainer>
        </>
    )
}