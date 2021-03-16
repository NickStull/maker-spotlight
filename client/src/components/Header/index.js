import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext'
import HeaderDropdown from '../Dropdown'
import Login from "../Login";
import Signup from "../Signup";
import './header.css'

const Header = () => {

	const [loggedInState, setLoggedInState] = useState(false);
	const { currentUser, logout } = useAuth();

	//check to see if user is logged in via context provider
	useEffect(() => {
		if (currentUser) {
			setLoggedInState(true);
		}
	}, [])

	return (
		<>
			<header className='pageHeader'>
				<a href="/" className='logo'>
					<h3 className='logo'>Bladesmith Spotlight</h3>
					<h5>Discover Your Next Obsession</h5>
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