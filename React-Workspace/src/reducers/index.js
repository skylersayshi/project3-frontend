import { combineReducers } from 'redux';

import posts from './posts';
import apiData from './posts';

export default combineReducers({
   posts, apiData
});