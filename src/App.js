import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import './App.css';
import {useEffect, useState} from "react";

import LoginComponent from "./components/loginComponent/LoginComponent";
import NavComponent from "./components/navComponent/NavComponent";
import MyProfileComponent from "./components/myProfileComponent/MyProfileComponent";
import Log from "./helpers/Log";
import PhotoComponent from "./components/photoComponent/PhotoComponent";
import SearchComponent from "./components/searchComponent/SearchComponent";

function App() {
  const [state, setState] = useState(Log.isLoggedIn)

  const reload = () => {
    setState(Log.isLoggedIn);
  }
  

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' element={<LoginComponent/>} />
          <Route path='/myprofile' exact element={<MyProfileComponent reload={reload} />} />
          <Route path='/photo' exact element={<PhotoComponent reload={reload} />} />
          <Route path='/search' exact element={<SearchComponent reload={reload} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
