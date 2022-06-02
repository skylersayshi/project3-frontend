const authReducer = (state = {authData: null}, action) =>{
    switch (action.type) {
        case "AUTH":
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {...state, authData: action?.data};

        case "LOGOUT":
            localStorage.clear();
            return{...state, authData: null};

        case "FETCH":
            localStorage.setItem('user', JSON.stringify({...action?.data}))
            return {...state, authData: action?.data};

        default:
            return state;

    }
}

export default authReducer;