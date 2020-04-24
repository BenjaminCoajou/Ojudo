import moment from 'moment';
import { DISPLAY_MONTH, DISPLAY_YEAR, SELECT_MONTH, SELECT_YEAR, SELECT_DAY, DISPLAY_EVENT, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR } from '../actions/calendar';


moment.locale('fr');

const initialState = {
    dateObject: moment(),
    allmonths: moment.months(),
    monthIsDisplayed: false,
    yearIsDisplayed: false,
    eventInfos: {},
    events: [],
    isLoading: false,
    coordinates: [48.856805, 2.346715],
    zoom: 6,
    
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case DISPLAY_MONTH:
            return {
                ...state,
                monthIsDisplayed: !state.monthIsDisplayed,
            };
        case DISPLAY_YEAR:
                return {
                    ...state,
                    yearIsDisplayed: !state.yearIsDisplayed,
                };
        case SELECT_MONTH:
            return {
                ...state,
                dateObject: state.dateObject.month(action.payload),
                monthIsDisplayed: !state.monthIsDisplayed,                
            };
        case SELECT_YEAR:
            return {
                ...state,
                dateObject: state.dateObject.year(action.payload),
                yearIsDisplayed: !state.yearIsDisplayed,
            };
        case SELECT_DAY:
        return {
            ...state,
            dayPick: action.payload,
        };
        case DISPLAY_EVENT:
                return {
                    ...state,
                    eventInfos: action.payload === undefined ? "" :action.payload,
                };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: [...action.payload],
                error: false,
                isLoading: true,
            };
        case FETCH_EVENTS_ERROR:
            return {
                ...state,
                events: [],
                error: true,
            };
        default:
            return state;
    }
};



