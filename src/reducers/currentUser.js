import { LOGIN_ACTION } from "../actions/login";

export const currentUserSelector = (state) => state.currentUser;

export default (state = null, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return action.data;    
        default:
            return state;
    }
}