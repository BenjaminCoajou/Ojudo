
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

export const getListFromUser = (state) => state.users.list.map((member) => ({              
    id: member.id,                                         // (id=)l"id" de datas (:=)devient (recette.id=)l"id" de "recette"
    firstname: member.firstname,
    lastname: member.lastname,
    picture: member.picture,
    email: member.email,
})); 