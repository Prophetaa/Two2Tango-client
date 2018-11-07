import * as React from "react";
import { Route } from 'react-router-dom'
import LoginPage from './components/loginPage/LoginPage'

import "./styling/App.css";
import RegistrationPage from './components/registrationPage/RegistrationPage';



class App extends React.Component {
 render() {
    return (
      <div className="main">
     <Route  exact path ="/registration" component={RegistrationPage}/>
     <Route exact path="/login" component={LoginPage}/>
      </div>
    );
  }
}

export default App;
