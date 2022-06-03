import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signin, signup} from '../actions/auth';
import FileBase from 'react-file-base64';
import { LockClosedIcon } from '@heroicons/react/solid'


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    selectedFile: '',
}

const Auth = () => {


    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);

        if(isSignup){
            dispatch(signup(formData, history))
        } else{
            dispatch(signin(formData,history))
        }

    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});

    }
    const switchMode = () =>{
        setFormData(initialState);
        setIsSignup((prev)=> !prev)

    };


  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{isSignup ? 'Sign up to create your account' : 'Sign in to your account'}</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            {
            isSignup && (
                <div>
                    <div>
                    <label htmlFor="firstName" className="sr-only">
                    First Name
                    </label>
                    <input
                    onChange={handleChange}
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                    />
                    </div>
                    <div>
                    <label htmlFor="lastName" className="sr-only">
                    Last Name
                    </label>
                    <input
                    onChange={handleChange}
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="appearance-none relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                    />
                    </div>
                </div>
                
            )
            }
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                    onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                />
              </div>
              {isSignup &&(
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Password
                  </label>
                  <input
                      onChange={handleChange}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm Password"
                  />
                    <div className='mt-2'>
                        <div className='mt-2'>Choose Profile Image</div>
                        <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64})=> setFormData({...formData, selectedFile: base64})}
                        />
                    </div>
                </div>
                
              )}            
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a onClick={switchMode} className="font-medium text-indigo-600 hover:text-indigo-500">
                    {isSignup ? 'Already have an account? Sign In' : 'New User? Create Account'}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                {isSignup ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Auth















{/* <div>
        <div>
            <img

            
            />

            <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <>  
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text"
                                name="firstName"
                                label="First Name"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text"
                                name="lastName"
                                label="Last Name"
                                onChange={handleChange}
                                required
                            />
                        </>
                    )
                }
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text"
                                name="email"
                                label="Email Address"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                label="Password"
                                onChange={handleChange}
                                required
                            />
                        { isSignup && 
                            <input 
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            onChange={handleChange}
                            required
                            />
                        }
                    <div>
                        <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64})=> setFormData({...formData, selectedFile: base64})}
                        />
                    </div>
                    <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
                    <button onClick={switchMode}>{isSignup ? 'Already have an account? Sign In' : 'Create Account'}</button>
                
            </form>
        </div>
    </div> */}