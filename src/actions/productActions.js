import { 
    ADD_PRODUCT, 
    ADD_PRODUCT_SUCCESS, 
    ADD_PRODUCT_ERROR, 
    FETCH_PRODUCTS, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_ERROR, 
    DELETE_PRODUCT, 
    DELETE_PRODUCT_SUCCESS, 
    DELETE_PRODUCT_ERROR, 
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR
} from './types';

import axiosClient from '../config/axiosClient';


export const addProductAction = ( product ) => {
    
    return dispatch => {
        dispatch( addProduct() );

        axiosClient.post( '/books', product )
            .then( res => {
                dispatch( addProductSuccess( product ) );
            } )
            .catch( error => {
                dispatch( addProductError( error ) )
            } );
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT
});

const addProductSuccess = ( product ) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = ( error ) => ({
    type: ADD_PRODUCT_ERROR,
    payload: error
})

export const fetchProductsAction = () => {
    return dispatch => {
        dispatch( fetchProducts() );

        axiosClient.get( '/books' )
            .then( res => {
                dispatch( fetchProductsSuccess( res.data ) );        
            } )
            .catch( error => {
                dispatch( fetchProductsError( error ) );
            } );
    }
}

const fetchProducts = () => ({
    type: FETCH_PRODUCTS
});

const fetchProductsSuccess = ( products ) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
});

const fetchProductsError = ( error ) => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: error
});

export const deleteProductAction = id => {
    return dispatch => {
        dispatch( deleteProduct() );
        axiosClient.delete( `/books/${id}` )
        .then( () => {
                console.log( 'product deleted' );
                dispatch( deleteProductSuccess( id ) );
            } )
            .catch( error => {
                dispatch( deleteProductError( error ) )
            } );
    }
}

const deleteProduct = () => ({
    type: DELETE_PRODUCT
});

const deleteProductSuccess = id => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
});

const deleteProductError = ( error ) => ({
    type: DELETE_PRODUCT_ERROR,
    payload: error
});


export const editProductAction = ( id, data ) => {
    return dispatch => {
        dispatch( editProduct() );
        axiosClient.put( `/books/${id}`, data )
            .then( res => {
                console.log( 'product updated: ', res.data );
                dispatch( editProductSuccess( id, res.data ) );
            } )
            .catch( error => {
                dispatch( editProductError( error ) );
            } )
    }
}

const editProduct = () => ({
    type: EDIT_PRODUCT
})

const editProductSuccess = ( id, product ) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: { id, product }
});

const editProductError = ( error ) => ({
    type: EDIT_PRODUCT_ERROR,
    payload: error
});