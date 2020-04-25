import { connect } from 'react-redux';
import Events from '../components/Events';


const mapStateToProps = (state) => ({    
    coordinates: state.calendar.coordinates,
    zoom: state.calendar.zoom,  
    marker: state.calendar.marker,  
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Events);