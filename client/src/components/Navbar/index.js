import React, { useEffect, useState } from "react";
import API from "../../utils/API"

const Header = () => {

	const [loggedInState, setLoggedInState] = useState(false);

	let results = [
		{
			firstName = 'Bob',
			lastName = 'Bowie',

		}]

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
		<header className='pageHeader'>
			{loggedInState ?
				<div>
					<h3>Meet Your Maker</h3>
					<h1>{`${results.firstName} ${results.lastName}`}</h1>
				</div>
				:
				<h1>Meet Your Maker</h1>
			}
		</header>
	)
}

export default Header;