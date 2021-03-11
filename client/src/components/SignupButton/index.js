import React from 'react';
import { Link } from 'react-router-dom';
const SignupButton = () => {
	return (
		<div>
			<button>
				<Link to='/signup'>
					Sign Up
          </Link>
			</button>
		</div>
	)
}
export default SignupButton;