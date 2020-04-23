import { connect } from 'react-redux';
import Presentation from '../components/Presentation';

const mapStateToProps = (state) => {
    console.log("La liste est :", state.users.list);
    return({
    list: state.presentation.list,
    })
    
};

const 
mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(Presentation);