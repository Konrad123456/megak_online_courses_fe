import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import {Navigation} from "./routes/Navigation/Navigation";
import {LogIn} from "./routes/Authentication/LogIn/LogIn";
import {Register} from "./routes/Authentication/Register/Register";
import {AppContainer} from "./App.styles";
import {Home} from "./routes/Home/Home";
import {useDispatch} from "react-redux";
import {setCredentials} from "./features/auth/authSlice";
import {useAuthenticatedMutation, useRefreshMutation} from "./app/api/authApiSlice";
import {Courses} from "./routes/Courses/Pages/Courses/Courses";
import {Course} from "./routes/Courses/Pages/Course/Course";

const App = () => {
  const [refresh] = useRefreshMutation();
  const [authenticated] = useAuthenticatedMutation();
  const dispatch = useDispatch();

  useEffect(() => {
     const checkLogIn = async () => {
        const isAuthenticated = await authenticated({}).unwrap();
        if(isAuthenticated) {
           const user = await refresh({});
           //@ts-ignore
            if (user.data) {
             //@ts-ignore
             dispatch(setCredentials(user.data))
           }
       }
     }
      checkLogIn();
  }, []);

  return (
      <AppContainer>
          <Routes>
              <Route path='/' element={<Navigation />}>
                  <Route index element={<Home />}/>
                  <Route path='signIn' element={<LogIn />}/>
                  <Route path='register' element={<Register />}/>
                  <Route path='courses' >
                      <Route index element={<Courses />} />
                      <Route path=':courseId' element={<Course />} />
                      <Route path='add-course' element={<Course />} />
                  </Route>
              </Route>
          </Routes>
      </AppContainer>

  );
}

export default App;
