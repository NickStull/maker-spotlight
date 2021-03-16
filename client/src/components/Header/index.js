import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext'
import HeaderDropdown from '../Dropdown'
import Login from "../Login";
import Signup from "../Signup";
import './header.css'

const Header = () => {

	const [loggedInState, setLoggedInState] = useState(false);
	const { currentUser } = useAuth();

	//check to see if user is logged in via context provider
	// useEffect(() => {
	// 	if (currentUser) {
	// 		setLoggedInState(true);
	// 	}
	// }, [])

	return (
		<>
			{console.log('current user', currentUser)}
			<header className='pageHeader'>
				<a href="/" className='logo'>
					<h3 className='logo'>Bladesmith Spotlight</h3>
					Discover Your Next Obsession
				</a>
				<Link to="/vote">Vote</Link>
				{/* display dropdown button based on loggedInState */}
				{currentUser
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