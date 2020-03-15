import { combineReducers } from 'redux';
import refindReducer from './refindReducer';
const rootReducer = combineReducers({
	Refind: refindReducer,
});

export default (state, action) => (
     rootReducer(state, action)
);
