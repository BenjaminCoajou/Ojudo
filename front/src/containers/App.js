import { connect } from 'react-redux';
import App from '../components/App';

import { fetchUser } from '../actions/Admin/users';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => {
        console.log('je dois aller chercher les users');
        dispatch(fetchUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);