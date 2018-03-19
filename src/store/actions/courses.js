import * as actionTypes from './actionTypes';
import axios from '../../axios-elearning';

export const fetchCoursesStart = () => {
    return {
        type: actionTypes.FETCH_COURSES_START
    }
}

export const fetchCoursesSuccess = (courses) => {
    return {
        type: actionTypes.FETCH_COURSES_SUCCESS,
        courses: courses
    }
}

export const fetchCoursesFail = (error) => {
    return {
        type: actionTypes.FETCH_COURSES_FAIL,
        error: error
    }
}

export function loadingData(isLoading){
    return {
      type : actionTypes.IS_LOADING_COURSES,
      isLoading
    }
}

export function clearData(){
    return {
      type : actionTypes.RESET_DATA_COURSES,
    }
}

export function stopLoad() {
    return {
      type: actionTypes.STOP_LOADING_COURSES,
    };
  }
  
  
  export function increaseIndexPage() {
    return {
      type: actionTypes.INCREASE_INDEX_PAGE,
    };
  }

export const fetchCourses = () => {
    return dispatch => {
        dispatch(fetchCoursesStart());
        axios.get('/courses')
            .then(response => {
                dispatch(fetchCoursesSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchCoursesFail(error));
            })
    }
}

export function fetchDatasIndexPage(indexPage) {
    return  function(dispatch) {
     return axios('/page/'+indexPage)
       .then(response => {
         let data = response.data;
         if(data.length === 0){
           dispatch(stopLoad());  
         }else{
           dispatch(fetchCoursesSuccess(data));
           dispatch(loadingData(false));
         }
       })
       .catch(error => dispatch(fetchCoursesFail(error)));
   };
 }
 
 export function increasePage () {
   return function(dispatch){
     dispatch(increaseIndexPage());
   }
 }
 
 export function resetData(){
   return function(dispatch){
     dispatch(clearData());
   }
 }
 
 export function changeValueIsLoading(isLoading){
   return function(dispatch){
     dispatch(loadingData(isLoading));
   }
 }