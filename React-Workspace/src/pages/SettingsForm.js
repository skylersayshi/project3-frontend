import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { createUserInfo, patchProfile } from '../actions/userInfo';

// function profileSettings(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

 const Settings = ({currentId, setCurrentId}) => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)

  const [userData, setUserData] = useState({
      // creator: '',
      firstName: '',
      lastName: '',
      bio: '',
      selectedFile: '',
      profilePic: '',
      banner: '',
    });

    const userInfo = useSelector((state)=> currentId ? state.users.find((UserInfo)=> UserInfo._id === currentId) : null);
  
    const dispatch = useDispatch();

    useEffect(()=>{
      if(userInfo) setUserData(userInfo);
    }, [userInfo])
  
    const handleSubmit = async (event) =>{
      event.preventDefault();
      if(currentId===0){
        dispatch(createUserInfo({...userData, firstName: user?.result?.firstName, lastName: user?.result?.lastName, profilePic: user?.result?.selectedFile}))
        
      } else {        
        dispatch(patchProfile(currentId, {...userData, firstName: user?.result?.firstName, lastName: user?.result?.lastName, profilePic: user?.result?.selectedFile}));
        
      }
      clear();
    }
  
    const clear = () => {
      setUserData({
        firstName: '',
        lastName: '',
        bio: '',
        selectedFile: '',
        profilePic: '',
        banner: '',
      })
    }

  return (
    <>
                <div className="flex-1 xl:overflow-y-auto">
                  <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-blue-gray-900">Account Settings</h1>

                    <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-gray-900">Profile Page</h2>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="firstName" className="block text-sm font-medium text-blue-gray-900">
                            First name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="John"
                            value={userData.firstName} 
                            onChange={(e)=>{setUserData({...userData, firstName: e.target.value})}}
                            className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="lastName" className="block text-sm font-medium text-blue-gray-900">
                            Last name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Smith"
                            value={userData.lastName} 
                            onChange={(e)=>{setUserData({...userData, lastName: e.target.value})}}
                            className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>


                        <div className="sm:col-span-6">
                          <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
                            Photo
                          </label>
                          <div className="mt-1 flex items-center">
                            <img
                              className="inline-block h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                              alt=""
                            />
                            <div className="ml-4 flex">
                              <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                                <label
                                  htmlFor="user-photo"
                                  className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
                                >
                                  <span>Set</span>
                                  <span className="sr-only"> user photo</span>
                                </label>
                                <input
                                  id="user-photo"
                                  name="user-photo"
                                  type="file"
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                                />
                              </div>
                              <button
                                type="button"
                                className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="banner" className="block text-sm font-medium text-blue-gray-100">
                            Banner image link
                          </label>
                          <input
                            type="text"
                            name="banner"
                            id="banner"
                            value={userData.banner} 
                            onChange={(e)=>{setUserData({...userData, banner: e.target.value})}}
                            className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="bio" className="block text-sm font-medium text-blue-gray-900">
                            Biography
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="bio"
                              name="bio"
                              rows={4}
                              className="block w-full border border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                              value={userData.bio} 
                            onChange={(e)=>{setUserData({...userData, bio: e.target.value})}}
                            />
                          </div>
                          <p className="mt-3 text-sm text-blue-gray-500">
                            Brief description for your profile.
                          </p>
                        </div>

            
                      </div>

                      

                      <div className="pt-8 flex justify-end">
                        <Link
                          to='/profile'
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Cancel
                        </Link>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              
    </>
  )
}

export default Settings;