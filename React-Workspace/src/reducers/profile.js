export default (users = [], action) => {
    switch(action.type){
        case 'FETCH_PROFILES':
            return action.payload; 
        case 'UPDATE_PROFILE':
            return users.map((user)=>(user._id === action.payload._id ? action.payload : user));

        default:
            return users;
    }
}