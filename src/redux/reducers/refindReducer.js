import {
    READING_LIST_REQUEST,
    READING_LIST_REQUEST_SUCCESS,
    READING_LIST_REQUEST_FAILED
} from '../actions/types';

const INIT_STATE = {
    READING_LIST: null
}
export default (state = INIT_STATE, action) => {
    console.log("action == " + action);
    switch (action.type) {
        case READING_LIST_REQUEST:
            return { ...state, READING_LIST: null };
        case READING_LIST_REQUEST_SUCCESS:
            return { ...state, READING_LIST: action.payload };
        case READING_LIST_REQUEST_FAILED:
            return { ...state, READING_LIST: null };
        default:
            return state;
    }
}