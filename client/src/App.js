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
}

export default App;
