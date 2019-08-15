import { VALIDATE_FORM } from './types';

export const validateAction = value => {
    return {
        type: VALIDATE_FORM,
        payload: value
    }
}