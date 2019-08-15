import { combineReducers } from 'redux';
import productReducer from './productReducer';
import validateReducer from './validateReducer'

export default combineReducers( {
    products: productReducer,
    error: validateReducer
} );