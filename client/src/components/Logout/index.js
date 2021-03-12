import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../utils/contexts/AuthContext'

const Logout = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory();

  const handleLogout = async () => {
    setError('')

    try {
      await logout()
      window.location.reload(false);
    } catch {
      setError('Failed to log out');
    }
  }

	return (
		<>
			<Button variant="link" onClick={handleLogout}>
					Log out
			</Button>
      {error && <Alert variant="danger">{error}</Alert>}
		</>
	)
}
export default Logout;