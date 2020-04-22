import { connect } from 'react-redux';
import App from '../components/App';

import { fetchUser } from '../actions/Admin/users';
import { fetchEvents } from '../actions/calendar';
import { fetchPresentation } from '../actions/presentation';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => {
        console.log('je dois aller chercher les users');
        dispatch(fetchUser());
    },
    fetchEvents: () => {
        console.log('je vais chercher les events');
        dispatch(fetchEvents());
    },
    fetchPresentation: () => {
        console.log('je vais chercher la préssentation');
        dispatch(fetchPresentation());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);