import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import {Navigation} from "./routes/Navigation/Navigation";
import {LogIn} from "./routes/Authentication/LogIn/LogIn";
import {Register} from "./routes/Authentication/Register/Register";
import {AppContainer} from "./App.styles";
import {Home} from "./routes/Home/Home";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "./features/auth/authSlice";
import {useAuthenticatedMutation, useRefreshMutation} from "./app/api/authApiSlice";

const App = () => {
  const user = useSelector(selectCurrentUser);
  const [refresh] = useRefreshMutation();
  const [authenticated] = useAuthenticatedMutation();

  useEffect(() => {
     const checkLogIn = async () => {
         const isAuthenticated = await authenticated(null).unwrap();
         console.log(isAuthenticated);
         if(isAuthenticated) {
           const user = await refresh({});
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
              </Route>
          </Routes>
      </AppContainer>

  );
}

export default App;
