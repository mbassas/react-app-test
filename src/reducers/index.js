import currentPage from './currentPage';
import currentUser from './currentUser';
import {combineReducers} from 'redux';

export default combineReducers({
    currentPage,
    currentUser
})