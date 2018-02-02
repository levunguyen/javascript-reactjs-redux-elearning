import axios from 'axios';
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../constants/index.js';

export function getData() {
  return {
    type: FETCHING_DATA,
  };
}

export function getDataSuccess(payload) {
  return {
    type: FETCHING_DATA_SUCCESS,
    payload,
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  };
}

export function fetchDatasWithRedux(){
  return function(dispatch) {
    dispatch(getData());
    return axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      let getThreeItems = response.data;
      dispatch(getDataSuccess(getThreeItems));
    })
    .catch(response => dispatch(getDataFailure()));
  }
}