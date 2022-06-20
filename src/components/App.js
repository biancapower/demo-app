import React from 'react'
import Nav from './Nav'
import Welcome from './Welcome'
import Sometimes from './Sometimes';
import LocationDashboard from './LocationDashboard';
import UserForm from './UserForm';
import Projects from './Projects';
import UserList from './UserList';

const App = () => {
  const loading = false

  // return loading ? <h4>Loading...</h4> : (
  return !loading && (
    <div>
      <Nav />
      
      <Welcome />
      <h1>If you're happy...</h1>
      <Sometimes happy={true} />

      <LocationDashboard />
      <hr/>
      <Projects />
      <hr/>
      <UserForm />
      <UserList text="DummyCorp will transform the aptitude of co-branded versioning to integrate. Our technology takes the best features of Flash and CSS. What does it really mean to syndicate 'magnetically'?" />
    </div>
  );
}

export default App;
