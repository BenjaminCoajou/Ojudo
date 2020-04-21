import { connect } from 'react-redux';
import Presentation from '../components/Presentation';

const mapStateToProps = (state) => ({
    list: state.presentation.list,
});

const mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(Presentation);