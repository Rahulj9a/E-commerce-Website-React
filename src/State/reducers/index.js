import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer'
import cartReducer from "./cartReducer";
 

const reducers = combineReducers({ items: itemsReducer, cart: cartReducer });

export default reducers