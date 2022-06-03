import * as api from '../api';

//action creators

export const getRecipes = () => async (dispatch) => {

    try{
        const {data} = await api.getrecipes();
        dispatch({type: 'FETCH_RECIPES', payload: data});
    }catch(error){
        console.log(error.message)
    }

}

export const createRecipe = (recipe) => async (dispatch) =>{
    try{
        const { data } = await api.createrecipe(recipe);
        dispatch({type: 'CREATE_RECIPE', payload: data});
    }
    catch(error){
        console.log(error);
    }
}

export const updateRecipe = (id, recipe) => async (dispatch) => {
    try {
        const {data} = await api.updaterecipe(id, recipe);
        dispatch({type: 'UPDATE_RECIPE', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteRecipe = (id) => async (dispatch) => {
    try {
        await api.deleterecipe(id);
        dispatch({type: 'DELETE_RECIPE', payload: id});
    } catch (error){
        console.log(error);
    }
}