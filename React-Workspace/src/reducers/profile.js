export default (Info = [], action) => {
    switch(action.type){
        case 'FETCH_PROFILE':
            return action.payload;
        case 'CREATE':
            return [...Info, action.payload];
        case 'UPDATE':
            return Info.map((user) => (user._id === action.payload._id ? action.payload : user));
            default:
            return Info;
    }}