import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const ProductItem = ( { product } ) => {

    const dispatch = useDispatch();

    const deleteProduct = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch( deleteProductAction( id ) );
            }
        });
    };

    return (
        <tr>
            <td>{ product.name }</td>
            <td>{ product.price }</td>
            <td>
                <Link to={`/product/edit/${product.id}`} className="btn btn-warning p-0 px-2 mx-2">Edit</Link>
                <button className="btn btn-danger p-0 px-2 mx-2" onClick={ () => deleteProduct( product.id ) }>Delete</button>
            </td>
        </tr>
    )
}

export default ProductItem;
