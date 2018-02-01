import { combineReducers } from 'redux';
import {
  transactions,
  wallet
} from './payment_reducer';

const rootReducer = combineReducers({
  transactions,
  wallet
});

export default rootReducer;
