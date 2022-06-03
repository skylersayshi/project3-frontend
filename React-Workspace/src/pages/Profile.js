import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { getProfile } from '../api/profile';

const profile = {
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
}

export default function Profile() {
  const [currentId, setCurrentId] = useState(0);
  const user = useSelector((state)=>state.users)
  console.log(user)

  const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();
    console.log(user);

    const logout = () =>{
      dispatch({type: 'LOGOUT'})
      history('/auth');
      setUser(null);
    }

    useEffect(()=>{
      const token = User?.token;
      //JWT
      if(token){
        const decodedToken = decode(token);
        if(decodedToken.exp *1000< new Date().getTime()) logout()
      }

      setUser(JSON.parse(localStorage.getItem('profile')))
    },[location]);
  
  //   useEffect(()=>{
  //   dispatch((getProfile));
  // }, [currentId, dispatch]);
  
  return (
    <div>
      <div>
        <img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt="" />
      </div>
      <div clagetssName="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={profile.avatar} alt="" />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-4xl font-bold text-gray-900 truncate">{User.result.name}</h1>
            </div>
            <div>
            <Link to="/profile/edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </Link>
            </div>
          </div>
        </div>
      </div>
      <h1>hello world</h1>
    </div>
  )
}
