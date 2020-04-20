import { connect } from 'react-redux';
import App from '../components/App';

import { fetchUser } from '../actions/Admin/users';
import { fetchArticle } from '../actions/Admin/articles';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => {
        console.log('je dois aller chercher les users');
        dispatch(fetchUser());
    },
    fetchArticle: () => {
        dispatch(fetchArticle());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);