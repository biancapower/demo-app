import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Sometimes from './Sometimes';
import Dashboard from './Dashboard';

const App = () => {
  const loading = false

  // return loading ? <h4>Loading...</h4> : (
  return !loading && (
    <div>
      <Nav />
      <Dashboard />
      <Main />

      <h1>If you're happy...</h1>
      <Sometimes happy={true} />
    </div>
  );
}

export default App;
