import React, {useState, useEffect} from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Example from './components/Example';
import Homepage from './pages/Homepage';
import ProfileBanner from './components/ProfileBanner';
import Signup from './components/Signup';
import InitialPage from './pages/InitialPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
  <div>
    {/* <Router> */}
        <Navbar />
        <Homepage currentId={currentId} setCurrentId={setCurrentId}/>
        {/* <Routes> */}
          {/* <Route path="/welcome" element={<Welcome />} /> */}
          {/* <Route path="/" element={<Homepage />} /> */}
          {/* <Homepage /> */}
          {/* <Route path="/:id" element={<Profile />} /> */}
        {/* </Routes> */}
    {/* </Router> */}
    {/* <Posts /> */}
    {/* <Form /> */}
    {/* <Homepage /> */}
  </div>
  );
}

export default App;
