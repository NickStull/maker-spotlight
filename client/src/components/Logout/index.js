import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown, Alert } from 'react-bootstrap';
import { useAuth } from '../../utils/contexts/AuthContext'

const Logout = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory();

  const handleLogout = async () => {
    setError('')

    try {
      await logout();
    } catch {
      setError('Failed to log out');
    }
  }

	return (
		<>
      <Dropdown.Item href="/" onClick={handleLogout}>Log out</Dropdown.Item>
      {error && <Alert variant="danger">{error}</Alert>}
		</>
	)
}
export default Logout;