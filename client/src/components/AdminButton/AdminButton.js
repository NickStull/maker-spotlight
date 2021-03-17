import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const AdminButton = () => {
  return (
    <div>
      <Button variant='secondary'>
        <Link to="/admin">Admin</Link>
      </Button>
    </div>
  );
};
export default AdminButton;
