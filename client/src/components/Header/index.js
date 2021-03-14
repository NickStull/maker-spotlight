import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext'
import HeaderDropdown from '../Dropdown'
import Login from "../Login";
import Signup from "../Signup";
import './header.css'

const Header = () => {

	const [loggedInState, setLoggedInState] = useState(false);
	const { currentUser } = useAuth();

	//check to see if user is logged in via context provider
	useEffect(() => {
		if (currentUser) {
			setLoggedInState(true);
		}
	}, [])

	return (
		<>
			<header className='pageHeader'>
				<a href="/">
					<h1>Bladesmith Spotlight</h1>
				</a>
				{/* display dropdown button based on loggedInState */}
				{loggedInState
					? <HeaderDropdown />
					: <>
						<Signup />
						<Login />
					</>
				}
			</header>
		</>
	)
}

export default Header;