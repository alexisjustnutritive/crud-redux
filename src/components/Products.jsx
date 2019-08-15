import React, { useEffect } from 'react';
import ProductItem from './ProductItem';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAction } from '../actions/productActions';

const Products = () => {

    const dispatch = useDispatch();
    const loading = useSelector( state => state.products.loading );
    const products = useSelector( state => state.products.products );
    console.log( products );

    useEffect(() => {
        dispatch( fetchProductsAction() );
    }, [ dispatch ]);

    return (
        <>
        {
            loading ? <p>loading...</p> : null
        }
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { 
                    products.map( product => 
                        <ProductItem key={ product.id } product={ product } />
                    )
                }
            </tbody>
        </table>
        </>
    )
}

export default Products
