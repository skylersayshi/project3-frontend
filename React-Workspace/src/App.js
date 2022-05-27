import React, { useEffect } from 'react';
import './index.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getCaloriesCount from './actions/calories';
import AuthNavbar from './components/AuthNavbar';
import Auth from './components/Auth';
import Recipes from './components/Recipes'


function App() {

  useEffect(()=>{
    getCaloriesCount();
  }, [])

  // const [apiData, setApiData] = useState(null);

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
          {/* <Route path="/:id" element={<Profile />} /> */}
          <Route path="/" exact element={<Homepage/>}/>
          {/* <Route path="/sign" exact element={<AuthNavbar/>} /> */}
          <Route path="/auth" exact element={<Auth/>} />
          <Route path="/recipes" exact element={<Recipes/>}/>
        </Routes>
    </Router>
    {/* <Posts /> */}
    {/* <Form /> */}
    {/* <Homepage /> */}
  </div>
  );
}

export default App;
