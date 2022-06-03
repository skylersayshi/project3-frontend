

export default (recipes = [], action) => {
    switch(action.type){
        case 'FETCH_RECIPES':
            return action.payload;
        case 'CREATE_RECIPE':
            return [...recipes, action.payload];
        case 'UPDATE_RECIPE':
            return recipes.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe));
        case 'DELETE_RECIPE':
            return recipes.filter((recipe)=> recipe.id !== action.payload);
        default:
            return recipes;
    }
}