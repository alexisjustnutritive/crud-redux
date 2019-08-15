import { VALIDATE_FORM } from '../actions/types';

const initialState = {
    error: false
}

const validateReducer = ( state = initialState, action ) => {
    if ( action.type === VALIDATE_FORM ) {
            return {
                error: action.payload
            }
    }
    return state;
}

export default validateReducer;