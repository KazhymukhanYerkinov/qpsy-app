import {applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    form: formReducer,
    appPage: appReducer,
    authPage: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;