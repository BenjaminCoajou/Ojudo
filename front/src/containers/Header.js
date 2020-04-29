import { connect } from 'react-redux';
import Header from '../components/Header';
import { submitLogout } from '../actions/login';

const mapStateToProps = ({login}) => ({
    isLogged: login.isLogged,
});

const mapStateToDispatch = (dispatch) => ({
    handleLogout: () => {
        dispatch(submitLogout());
    }
});

export default connect(mapStateToProps, mapStateToDispatch)(Header);