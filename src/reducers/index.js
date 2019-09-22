import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import toggleSidebar from './toggleSidebar';

export default combineReducers({
    photoToView: photoReducer,
    toggleSidebar: toggleSidebar
});
