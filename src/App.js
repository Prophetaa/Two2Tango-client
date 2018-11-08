import './styling/App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import NavBar from './components/navBar/NavBar'
import ResultsListContainer from './components/resultsPage/ResultsListContainer';


<<<<<<< HEAD

class App extends React.Component {
 render() {
    return (
      <div className="main">
     <Route  exact path ="/signup" component={RegistrationPage}/>
     <Route exact path="/login" component={LoginPage}/>
      </div>
    );
  }
=======
class App extends Component {
	render() {
		return (
			<div className='header'>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
          <nav>
            <NavBar />
          </nav>
			<div className="main">
				<Route exact path="/signup" component={RegistrationPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/results" component={ResultsListContainer} />
			</div>
			</div>
		);
	}
>>>>>>> 7a2e106b99f74b8a41f6ae6fa52d9ef63ea032f4
}

export default App;

