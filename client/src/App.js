<<<<<<< Updated upstream
import React from 'react';
import './styles/App.css';
import SignupButton from './components/SignupButton';
import Test from "./components/Test"
import Header from "./components/Header"

function App() {
	return (
		<>
			<Header />
			<Test />
			<SignupButton />
		</>
	);
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import SignupButton from './components/SignupButton';
import Test from "./components/Test"
import { AuthProvider } from "./utils/contexts/AuthContext"
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Test />
          <SignupButton />
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
        </AuthProvider>
      </Router>
    </>
  );
>>>>>>> Stashed changes
}

export default App;
