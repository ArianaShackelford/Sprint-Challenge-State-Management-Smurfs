import React from 'react';
import Villagers from './Villagers';
import { connect } from 'react-redux';
import {getSmurfs} from '../actions';

const SmurfVillage = props => {
    return(
        <>
        <p>Here are all the smerfs!-- this is where I want all the smurfs to display</p>
         {/* {props.map((smurf) => <div> {smurf.name} {smurf.age} {smurf.height} </div>)} */}
         {props.state.map(villager => (
             <Villagers key={villager.id}/>

         ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        
        state: state
     };
 };

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfVillage);