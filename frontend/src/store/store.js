import {combineReducers, applyMiddleware } from 'redux';
import {configureStore } from '@reduxjs/toolkit';
import thunk  from 'redux-thunk';
import  {createBookReducer } from '../redux/reducers/createBookReducer';
import { bookListReducer } from '../redux/reducers/bookListReducer';
import { userReducer } from '../redux/reducers/users/userAuthReducer';
const middlewares = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducer,
    bookList: bookListReducer,
    userLogin: userReducer,
});

const store = configureStore({
    reducer: createBookReducer,
    middleware: middlewares,
    devTools: process.env.JWT_SECRET_KEY !== 'production'
});
export {store};

