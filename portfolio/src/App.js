import React from 'react';
import FixedDrawer from './components/Drawer';
import Profile from './components/Profile';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import Cards1 from './components/cards1';

import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <FixedDrawer />

      <div className="content-container">
      <Profile />
    <div className='other-container'>
        <Home />
        <AboutMe />
        <Cards1 />
        </div>
      </div>
    </div>
  );
};

export default App;
