import * as actionTypes from '../actions/actionTypes';

const initialState = {
    coursesPage: {
        title: 'Courses',
        imageUrl: 'https://i.imgur.com/DCP0DZJ.png',
        directories: ['Home', 'Courses']
    },
    cartAmount: '1',
    courses: [],
    indexPage: -1,
    canLoad: true,
    isLoading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COURSES_START:
            return {
                ...state,
                // loading: true
            };
        case actionTypes.FETCH_COURSES_SUCCESS:
            return {
                ...state,
                // loading: false,
                courses: [...state.courses, ...action.courses]
            };
        case actionTypes.FETCH_COURSES_FAIL:
            return {
                ...state,
                // loading: true
            };
        case actionTypes.STOP_LOADING_COURSES:
            return {
                ...state,
                canLoad: false
            };
        case actionTypes.INCREASE_INDEX_PAGE:
            return {
                ...state,
                indexPage: state.indexPage + 1
            };
        case actionTypes.IS_LOADING_COURSES:
            return { 
                ...state, 
                isLoading: action.isLoading 
            };
        case actionTypes.RESET_DATA_COURSES:
            return {
                ...state,
                courses: [],
            }
        default:
            return state;
    }
}

export default reducer
