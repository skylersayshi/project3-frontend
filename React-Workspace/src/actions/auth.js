import * as api from '../api/index.js';

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

export const getusers = () => async (dispatch) => {

    try{
        const {data} = await api.fetchUsers();
        dispatch({type: 'FETCH_PROFILES', payload: data});
    }catch(error){
        console.log(error.message)
    }

}

export const updateprofile = (id, userData) => async(dispatch) =>{
    try {
        const {data} = await api.updateProfile(id, userData);
        dispatch({type: 'UPDATE_PROFILE', payload: data});
        console.log(id + " auth.js");
        // history('/profile');
    } catch (error) {
        console.log(error);
    }


}

