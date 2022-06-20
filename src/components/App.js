import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './Nav'
import Welcome from './Welcome'

const App = () => {
  const loading = false

  // return loading ? <h4>Loading...</h4> : (
  return !loading && (
    <div>
      <Nav />
      <Welcome />
      <Outlet />
    </div>
  );
}

export default App;
