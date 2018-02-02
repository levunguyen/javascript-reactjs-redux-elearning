import { FETCHING_DATA, FETCHING_DATA_SUCCESS } from '../constants/index';

const initialState = {
  data: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return state;
    case FETCHING_DATA_SUCCESS:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
}
