import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import toggleSidebar from './toggleSidebar';
import overlaysData from './overlaysReducer';

export default combineReducers({
    photoToView: photoReducer,
    toggleSidebar: toggleSidebar,
    overlaysData: overlaysData
});
