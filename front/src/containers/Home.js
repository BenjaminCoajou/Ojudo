import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
    isLoading: state.calendar.isLoading,
    dateObject: state.calendar.dateObject,
    events: state.calendar.events,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);