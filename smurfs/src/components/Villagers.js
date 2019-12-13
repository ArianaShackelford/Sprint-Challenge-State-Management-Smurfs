import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';

const Villagers = props => {
    console.log('villagers props' ,props);
    return(
        <>
       
        <div>
        <p>Hi, my name is {props.villager.name},</p>
        <p>I am {props.villager.age} years old,</p>
        <p>and {props.villager.height} tall.</p>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log('villagers state', state)
    return {
        
         name: state.name,
         age: state.age,
         height: state.height,
         
     };
 };

export default connect(
    mapStateToProps,
    {getSmurfs}
)(Villagers);