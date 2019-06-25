import { combineReducers } from 'redux';
import cars from './cars';
import filters from './filters';

export default combineReducers({
    cars,
    filters
})