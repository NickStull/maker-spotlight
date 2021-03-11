<<<<<<< HEAD
<<<<<<< Updated upstream
import { useState } from 'react'
import Signup from '../Signup'
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 151fdd012172179b2d6cf9b0ccc31c6c67c4b90a

const SignupButton = () => {

  return (
<<<<<<< HEAD
    <div>
      <button onClick={() => setIsOpen(true)}>Sign Up</button>
      <Signup open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = () => {

  return (
=======
>>>>>>> 151fdd012172179b2d6cf9b0ccc31c6c67c4b90a
      <div>
        <button>
          <Link to='/signup'>
            Sign Up
          </Link>
        </button>
      </div>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 151fdd012172179b2d6cf9b0ccc31c6c67c4b90a
  )
}

export default SignupButton;