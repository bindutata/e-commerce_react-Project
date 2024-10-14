import {productReducerFunction} from './ProductReducer';
import {combineReducers} from 'redux';

export const combineReducer=combineReducers({productReducer:productReducerFunction});