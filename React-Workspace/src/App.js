import './index.css';
import Example from './components/Example';
import Homepage from './pages/Homepage';
import ProfileBanner from './components/ProfileBanner';
import Signup from './components/Signup';
import InitialPage from './pages/InitialPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
  <div>
    <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/welcome" element={<Welcome />} /> */}
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/:id" element={<Profile />} /> */}
        </Routes>
    </Router>
  </div>
  );
}

export default App;
