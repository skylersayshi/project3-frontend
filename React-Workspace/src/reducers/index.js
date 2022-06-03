import { combineReducers } from 'redux';

import posts from './posts';
import apiData from './posts';
import auth from './auth';
import recipes from './recipes';
import users from './profile';

export default combineReducers({
   posts, apiData, auth, recipes, users
});