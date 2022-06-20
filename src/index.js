import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import LocationDashboard from './components/LocationDashboard';
import Projects from './components/Projects';
import UserDashboard from './components/UserDashboard';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="location" element={<LocationDashboard />} />
        <Route path="users" element={<UserDashboard />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an option</p>
              </main>
            }
          />
          <Route path="username" element={<UserForm />} />
          <Route path="list" element={<UserList text="DummyCorp will transform the aptitude of co-branded versioning to integrate. Our technology takes the best features of Flash and CSS. What does it really mean to syndicate 'magnetically'?" />} />
        </Route>
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>
);