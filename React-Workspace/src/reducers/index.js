import { combineReducers } from 'redux';

import posts from './posts';
import apiData from './posts';
import auth from './auth';
import Info from './profile'

export default combineReducers({
   posts, apiData, auth, Info
});