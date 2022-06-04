import React, { useEffect, useState } from 'react';
import './index.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthNavbar from './components/AuthNavbar';
import Auth from './components/Auth';
import Calories from './components/Calories/calories'
import Profile from './pages/Profile';
import Settings from './pages/SettingsForm'
import { useDispatch } from 'react-redux'
import Recipes from './components/Recipes/Recipes';
import DevPage from './components/DevPage';



function App() {
  
  return (
  <div>
    <Router>
        {/* <Navbar /> */}
        <AuthNavbar />
        {/* <Homepage currentId={currentId} setCurrentId={setCurrentId}/> */}
        <Routes>
          {/* <Route path="/welcome" element={<Welcome />} /> */}
          {/* <Route path="/" element={<Homepage />} /> */}
          {/* <Homepage /> */}
          <Route path="/calories" exact element={<Calories />}/>
          {/* <Route path="/:id" element={<Profile />} /> */}
          <Route path="/" exact element={<Homepage/>}/>
          {/* <Route path="/sign" exact element={<AuthNavbar/>} /> */}
          <Route path="/auth" exact element={<Auth/>} />
          <Route path="/recipes" exact element={<Recipes/>}/>
          <Route path="/profile" exact element={<Profile />}/>
          <Route path="/profile/edit" exact element={<Settings />}/>
          <Route path="/communities" exact element={<DevPage/>} />
        </Routes>
    </Router>
    {/* <Posts /> */}
    {/* <Form /> */}
    {/* <Homepage /> */}
  </div>
  );
}

export default App;
