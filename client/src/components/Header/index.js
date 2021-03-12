import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from '../../utils/contexts/AuthContext'
import HeaderDropdown from '../Dropdown'
import './header.css'

const Header = () => {

	const [loggedInState, setLoggedInState] = useState(false);
	const { currentUser } = useAuth();

	//check to see if user is logged in via context provider
	useEffect(() => {
		if (currentUser) {
			setLoggedInState(true);
		}
	}, [currentUser])

	return (
		<>
			<header className='pageHeader'>
				<h1>Maker Spotlight</h1>
				{/* display dropdown button based on loggedInState */}
				{loggedInState ? <HeaderDropdown /> : <></>
				}
			</header>
		</>
	)
}

export default Header;