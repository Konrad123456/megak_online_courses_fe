import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import {Navigation} from "./routes/Navigation/Navigation";
import {LogIn} from "./routes/Authentication/LogIn";

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='signIn' element={<LogIn />}/>
        </Route>
      </Routes>
  );
}

export default App;
