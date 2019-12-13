import React from 'react';
import { connect } from 'react-redux';
import {makeSmurf} from '../actions';

const AddVillagerForm = () => {
    return(
        <form>
            <label>Lets name your new smurf!</label>
            <input name='name' value='' placeholder='name' />
            <label>How old are they?</label>
            <input name='age' value='' placeholder='age' />
            <label>How tall are they?</label>
            <input name='height' value='' placeholder='height' />
            <button>Add a new Smurf!</button>
        </form>
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
     {makeSmurf}
)(AddVillagerForm);