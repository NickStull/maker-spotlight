import React, { useState } from "react";
import HeaderDropdown from '../Dropdown'
import './header.css'

const Header = () => {

	const [loggedInState, setLoggedInState] = useState(true);

	let makerResults = [
		{
			firstName: 'Bob',
			lastName: 'Bowie',
		}
	]

	let userResults = [{ firstName: 'Oscar' }]

	function toggleLoggedIn() {
		loggedInState ? setLoggedInState(false) : setLoggedInState(true);
		console.log(loggedInState);
	}


	return (
		<>
			<header className='pageHeader'>
				{loggedInState ?
					<>
						<div>
							<h3>Meet Your Maker</h3>
							<h1>{`${makerResults[0].firstName} ${makerResults[0].lastName}`}</h1>
						</div>
						<HeaderDropdown />
						<button>Welcome<br />{`${userResults[0].firstName}`}</button>
					</>
					:
					<h1>Meet Your Maker</h1>
				}
			</header>
			<button onClick={toggleLoggedIn}>Logged In{loggedInState}</button>

		</>
	)
}

export default Header;