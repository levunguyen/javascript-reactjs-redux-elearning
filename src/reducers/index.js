import { combineReducers } from 'redux';
import chapters from './chapters';
import dataReducer from './dataReducer';

const myReducer = combineReducers({
  chapters, dataReducer
})

export default myReducer;
