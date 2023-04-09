import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import {Navigation} from "./routes/Navigation/Navigation";
import {LogIn} from "./routes/Authentication/LogIn/LogIn";
import {Register} from "./routes/Authentication/Register/Register";
import {AppContainer} from "./App.styles";
import {Home} from "./routes/Home/Home";
import {Courses} from "./routes/Courses/Pages/Courses/Courses";
import {Course} from "./routes/Courses/Pages/Course/Course";

const App = () => {
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
                  </Route>
              </Route>
          </Routes>
      </AppContainer>

  );
}

export default App;
