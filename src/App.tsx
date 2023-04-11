import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import {Navigation} from "./routes/Navigation/Navigation";
import {LogIn} from "./routes/Authentication/LogIn/LogIn";
import {Register} from "./routes/Authentication/Register/Register";
import {AppContainer} from "./App.styles";
import {Home} from "./routes/Home/Home";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser, setCredentials} from "./features/auth/authSlice";
import {useAuthenticatedMutation, useRefreshMutation} from "./app/api/authApiSlice";
import {Courses} from "./routes/Courses/Pages/Courses/Courses";
import {Course} from "./routes/Courses/Pages/Course/Course";
import {AddCourse} from "./routes/Courses/Pages/AddCourse/AddCourse";
import {useGetCategoriesMutation} from "./app/api/coursesApiSlice";
import {setCategories} from "./features/categories/categoriesSlice";
import {InstructorsCourses} from "./routes/Courses/Pages/Courses/InstructorsCourses";

const App = () => {
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
            console.log(categoriesData);
            dispatch(setCategories(categoriesData));
        }
        fetchCategories();
    }, [])

    return (
        <AppContainer>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />}/>
                    <Route path='signIn' element={<LogIn />}/>
                    <Route path='register' element={<Register />}/>
                    <Route path='courses' >
                        <Route index element={<Courses />} />
                        <Route path='instructors' element={<InstructorsCourses />} />
                        <Route path=':courseId' element={<Course />} />
                        <Route path='add-course' element={<AddCourse />} />
                    </Route>
                </Route>
            </Routes>
        </AppContainer>
    );
}

export default App;
