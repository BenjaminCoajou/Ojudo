import { connect } from 'react-redux';
import App from '../components/App';

import { fetchUser } from '../actions/Admin/users';
import { fetchArticle } from '../actions/Admin/articles';
import { fetchEvents } from '../actions/calendar';
import { fetchUsers } from '../actions/presentation';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => {
        console.log('je dois aller chercher les users');
        dispatch(fetchUser());
    },
                                          
    fetchArticle: () => {
        dispatch(fetchArticle());
    },

    fetchEvents: () => {
        console.log('je vais chercher les events');
        dispatch(fetchEvents());
    },

    fetchUsers: () => {
        dispatch(fetchUsers());
    },     
});

export default connect(mapStateToProps, mapDispatchToProps)(App);