import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    MAKE_THINE_SMURF,
    MAKE_THINE_SMURF_SUCCESS,
    MAKE_THINE_SMURF_FAILURE
} from '../actions';

const initialState = {
    smurfs: [
       
    ],
    isGetting: false,
    makeSmurf: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                isGetting: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isGetting: false
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                isGetting: false,
                error: action.payload
            }
        case MAKE_THINE_SMURF:
            return {
                ...state,
                makeSmurf: true
            }
        case MAKE_THINE_SMURF_SUCCESS:
            return {
                ...state,
                makeSmurf: false,
                smurfs: action.payload
            }
        case MAKE_THINE_SMURF_FAILURE:
            return {
                ...state,
                makeSmurf: false,
                error: action.payload
            }
            default:
           return state;
    }
}

export default reducer;