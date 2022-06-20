import React from 'react'
import "../css/nav.css"
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div>
      <Link to="username">What's my username?</Link> |{' '}
      <Link to="list">List Users</Link>
      <Outlet />
    </div>
  );
}

export default UserDashboard;
