import React from 'react';
import Villagers from './Villagers';
import { connect } from 'react-redux';
import {getSmurfs} from '../actions';

const SmurfVillage = props => {
    console.log(props)
    return(
        <>
        <p>Here are all the smerfs!-- this is where I want all the smurfs to display</p>
         {props.villagers.map(villager => (
             <Villagers key={villager.id} villager={villager} />
         ))}
         <button onClick={props.getSmurfs}>smurf village</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        
        villagers : state.smurfs
     };
 };

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfVillage);