import {createStore} from 'redux';
import {combineReducer} from './CombineReducer';

export const productStore = createStore(combineReducer,{});