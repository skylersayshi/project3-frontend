import * as api from '../api/profile';

export const getUserInfo = () => async (dispatch) => {

    try{
        const {data} = await api.getProfile();
        dispatch({type: 'FETCH_PROFILE', payload: data});
    }catch(error){
        console.log(error.message)
    }

}

export const createUserInfo = (e) => async (dispatch) =>{
    try{
        const { data } = await api.createUserInfo(e);
        dispatch({type: 'CREATE', payload: data});
    }
    catch(error){
        console.log(error);
    }
}

export const patchProfile = (id, e) => async (dispatch) => {
    try {
        const {data} = await api.patchProfile(id, e);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

// export const deleteUserInfo = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id);
//         dispatch({type: 'DELETE', payload: id});
//     } catch (error){
//         console.log(error);
//     }
// }
