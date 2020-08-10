import { combineReducers } from 'redux';
import categories from './categories';
import cart from './cart';

export default combineReducers({ cart, categories });