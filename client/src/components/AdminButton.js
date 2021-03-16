import React from "react";
import { Link } from "react-router-dom";
const AdminButton = () => {
  return (
    <div>
      <button>
        <Link to="/admin">Admin</Link>
      </button>
    </div>
  );
};
export default AdminButton;
