import { connect } from 'react-redux';
import Presentation from '../components/Presentation';
import { getListFromUser } from '../reducers/presentation';

const mapStateToProps = (state) => ({
    list: getListFromUser(state),
});

const mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(Presentation);