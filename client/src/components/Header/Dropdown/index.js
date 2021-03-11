import React, { useEffect, useState } from "react";
import API from "../../utils/API"
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
	// useEffect(() => {
	//   API.getUsers()
	//     .then(
	//       results => {
	//         console.log(results);
	//         setDataState(results);
	//       }
	//     )
	//     .catch(err => console.log(err));
	// }, []);

	return (
		<>
			<header className='pageHeader'>
				{loggedInState ?
					<>
						<div>
							<h3>Meet Your Maker</h3>
							<h1>{`${makerResults[0].firstName} ${makerResults[0].lastName}`}</h1>
						</div>
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