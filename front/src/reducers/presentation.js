
import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/presentation';

export const initialState = {
    list: [],
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: [...action.payload],
                error: false,
            };
        case FETCH_USERS_ERROR:
            return {
                ...state,
                list: [],
                error: true,
            };
        default:
        return state;
    }
};

