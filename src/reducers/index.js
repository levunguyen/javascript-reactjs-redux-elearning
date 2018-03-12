import { combineReducers } from 'redux';
import section from './sectionReducers';
import dataReducer from '../reducers/listCourseReducer';
import authReducer from '../reducers/authReducer';

const myReducer = combineReducers({
  section, //chapters:chapters
  authReducer,
  dataReducer,
});

export default myReducer;
