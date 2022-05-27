import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signin, signup} from '../actions/auth';


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    <div>
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
                            type="text"
                            name="confirmPassword"
                            label="Confirm Password"
                            onChange={handleChange}
                            required
                            />
                        }
                    {/* <GoogleLogin 
                        clientId="376670890278-p7nckaeto64f2764ealbjp7p1f4qs0pm.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                GoogleSignIn
                            </button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    /> */}
                    <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
                    <button onClick={switchMode}>{isSignup ? 'Already have an account? Sign In' : 'Create Account'}</button>
                
            </form>
        </div>
    </div>
  )
}

export default Auth