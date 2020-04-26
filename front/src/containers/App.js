import { connect } from 'react-redux';
import App from '../components/App';

import { fetchUser } from '../actions/Admin/users';
import { fetchArticle, fetchPicture } from '../actions/Admin/articles';

import { fetchEvents, displayEvent } from '../actions/calendar';
import { fetchPresentation } from '../actions/presentation';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => {
       
        dispatch(fetchUser());
    },
                                          
    fetchArticle: () => {
        dispatch(fetchArticle());
    },

    fetchPicture: () => {
        dispatch(fetchPicture());
    },

    fetchEvents: () => {
        
        dispatch(fetchEvents());
    },

    fetchPresentation: () => {
        dispatch(fetchPresentation());
    },
    displayEvent: () => {
        dispatch(displayEvent());
    }     
});

export default connect(mapStateToProps, mapDispatchToProps)(App);