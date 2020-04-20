import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
    isLoading: state.calendar.isLoading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);