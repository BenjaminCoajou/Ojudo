import { connect } from 'react-redux';
import Events from '../components/Events';


const mapStateToProps = (state) => ({    
    coordinates: state.calendar.coordinates,
    zoom: state.calendar.zoom,    
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Events);