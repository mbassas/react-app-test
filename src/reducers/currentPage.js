import {NEXT_PAGE_ACTION} from '../actions/nextPage';

export default (state = 'page-1', action) => {
    switch(action.type) {
        case NEXT_PAGE_ACTION:
            return action.data;
        default:
        return state;
    }
}