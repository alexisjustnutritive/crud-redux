import { 
    VALIDATE_FORM, 
    ADD_PRODUCT, 
    ADD_PRODUCT_SUCCESS, 
    FETCH_PRODUCTS, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_ERROR, 
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS
} from '../actions/types';

const initialState = {
    products: [],
    error: false,
    loading: false
}

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case VALIDATE_FORM:
            return state;
        case ADD_PRODUCT:
            return state
        case ADD_PRODUCT_SUCCESS: 
            return {
                ...state,
                products: state.products.concat( action.payload )
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                error: false,
                loading: false,
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case DELETE_PRODUCT:
            return state;
        case DELETE_PRODUCT_SUCCESS: 
            return {
                ...state,
                products: state.products.filter( product => product.id !== action.payload ),
                error: false
            }
        case DELETE_PRODUCT_ERROR: 
            return {
                ...state,
                error: true
            }
        case EDIT_PRODUCT:
            return state;
        case EDIT_PRODUCT_SUCCESS:
            {
                let index = state.products.findIndex( element => element === action.payload.id );
                let updatedProductsArray = [ ...state.products ];
                updatedProductsArray[ index ] = action.payload.product;
                return {
                    ...state,
                    products: updatedProductsArray
                }
            }
        default:
            return state
    }
}