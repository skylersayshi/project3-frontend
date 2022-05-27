import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const AuthNavbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();

    const logout = () =>{
      dispatch({type: 'LOGOUT'})
      history('/auth');
      setUser(null);
    }

    useEffect(()=>{
      const token = user?.token;
      //JWT
      if(token){
        const decodedToken = decode(token);
        if(decodedToken.exp *1000< new Date().getTime()) logout()
      }

      setUser(JSON.parse(localStorage.getItem('profile')))
    },[location]);

  return (
    <div>
        {user ? (
            <div>
                <img src={user.result.imageUrl} alt={user.result.name} />
                <div>First Letter: {user.result.name.charAt(0)}</div>
                <div>username: {user.result.name}</div>
                <button onClick={logout}>Logout</button>
            </div>
        ) : 
            // <Link to="/auth">
            //     <button>Sign In</button>
            // </Link>
            <div>
              <div>Not logged in</div>
              <Link to="/auth">
                 <button>Sign In</button>
              </Link>
            </div>
            }
    </div>
  )
}

export default AuthNavbar