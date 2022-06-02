import * as api from '../api/index.js';
import {getProfile} from '../api/profile.js';

export const signin = (formData, history) => async(dispatch) =>{
    try{
        const {data} = await api.signIn(formData);

        dispatch({type: 'AUTH', data});

        history('/')

    } catch(error){
        console.log(error)
    }
}

export const signup = (formData, history) => async(dispatch) =>{
    try{
        const {data} = await api.signUp(formData);

        dispatch({type: 'AUTH', data});

        history('/')

    } catch(error){
        console.log(error)
    }
}

export const getprofile = (updatedSettings, history) => async(dispatch) =>{
    try{
        const {data} = await getProfile(updatedSettings);
        dispatch({type: 'PROF', data});
        history('/profile')
    } catch(error){
        console.log(error)
    }
}

