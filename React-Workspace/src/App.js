import React, { useEffect } from 'react';
import './index.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthNavbar from './components/AuthNavbar';
import Auth from './components/Auth';
import Recipes from './components/Recipes'
import Calories from './components/Calories/calories'
import Profile from './pages/Profile';
import NewRecipes from './components/NewRecipe'
import EditRecipe from './components/EditRecipe'



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
          <Route path="/recipes/new" exact element={<NewRecipes/>}/>
          <Route path="/recipes/edit" exact element={<EditRecipe/>}/>
          <Route path="/profile" exact element={<Profile />}/>
        </Routes>
    </Router>
    {/* <Posts /> */}
    {/* <Form /> */}
    {/* <Homepage /> */}
  </div>
  );
}

export default App;
