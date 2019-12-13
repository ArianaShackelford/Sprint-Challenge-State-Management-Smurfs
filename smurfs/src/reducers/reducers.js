import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    MAKE_THINE_SMURF
} from '../actions';

const initialState = {
    name: '',
    age: 0,
    height: '',
    id: 0,
    isGetting: false,
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
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload. height,
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
            }
        default:
           return state;
    }
}

export default reducer;