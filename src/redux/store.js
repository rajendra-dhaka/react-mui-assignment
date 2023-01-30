import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({ userReducer: userReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));
