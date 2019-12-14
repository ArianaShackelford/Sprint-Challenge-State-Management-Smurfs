import React, {useState} from 'react';
import { connect } from 'react-redux';
import {makeSmurf} from '../actions';

const AddVillagerForm = props => {
    const [villager, setVillager] = useState({
        name: '',
        age: '',
        height: ''})

    console.log( 'this is villager from useState',villager)

    const onChange = (event) => {
        setVillager({
            ...villager,
            [event.target.name] : event.target.value,
        })
    }
    
    console.log(props)
    return(
        <form onSubmit={e => {
            e.preventDefault()
            props.makeSmurf(villager)
            setVillager('')
        }}>
            <label>Lets name your new smurf!</label>
            <input
                name='name'
                value={villager.name} 
                placeholder='name'
                onChange={onChange} />
            <label>How old are they?</label>
            <input 
                name='age' 
                value={villager.age} 
                placeholder='age'
                onChange = {onChange} />
            <label>How tall are they?</label>
            <input 
            name='height' 
            value={villager.height} 
            placeholder='height'
            onChange = {onChange} />
            <button type='submit'>Add a new Smurf!</button>
        </form>
    )
}

const mapStateToProps = state => {
   return {
       makeSmurf: state.makeSmurf
    };
};

export default connect(
    mapStateToProps,
     {makeSmurf}
)(AddVillagerForm);