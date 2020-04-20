import { connect } from 'react-redux';
import App from '../components/App';

import { fetchUsers } from '../actions/presentation';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);