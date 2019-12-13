import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';

const Villagers = props => {
    console.log(props);
    return(
        <>
        <p>This is where data gets mapped through to make all the villagers.</p>
       
        </>
    )
}

const mapStateToProps = state => {
    return {
        
         name: state.name,
         age: state.age,
         height: state.height,
         isGetting: state.isGetting,
         error: state.error
     };
 };

export default connect(
    mapStateToProps,
    {getSmurfs}
)(Villagers);