import React from 'react'
import "../css/nav.css"
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="location">Location</Link>
      <Link to="users">Users</Link>
      <Link to="projects">Projects</Link>
    </div>
  );
}

export default Nav;
