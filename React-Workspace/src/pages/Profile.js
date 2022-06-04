import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { getProfile } from '../api/profile';
import { updateprofile, getusers } from '../actions/auth';



const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

export default function Profile() {

  const user = JSON.parse(localStorage.getItem('profile'))
  const [currentId, setCurrentId] = useState(user.result._id)
  const dispatch = useDispatch();
  const userProfile = useSelector((state)=> currentId ? state.users.find((specificUser)=> specificUser._id === currentId) : null);
  
  

  useEffect(()=>{
    dispatch(getusers());
  }, [currentId, dispatch]);



  return (
    <div>
      <div>
        <img className="h-32 w-full object-cover lg:h-48" src={userProfile?.banner} alt="" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={user?.result?.selectedFile} alt="" />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">{user?.result?.name}</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="mt-5 flex justify-center sm:mt-0">
                <Link to="/profile/edit"
                  className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">{user?.result?.name}</h1>
        </div>
        <div>{userProfile?.bio}</div>
        <div>{userProfile?.banner}</div>
      </div>








    </div>
  )
}