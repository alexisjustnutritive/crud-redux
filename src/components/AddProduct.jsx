import React, { useState, useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../actions/productActions';
import { validateAction } from '../actions/validationActions';



const AddProduct = () => {

    const [ product, setProduct ] = useState( {
        name: '',
        price: '',
    } );

    const onChange = e => {
        setProduct( {
            ...product,
            [e.target.name]: e.target.value
        } )
    }

    useEffect( () => {
    }, [ product ] )

    const distpatch = useDispatch();
    const error = useSelector( state => state.error.error );
    
    const addProduct = ( product ) => distpatch( addProductAction( product ) );

    const onSubmit = e => {
        e.preventDefault();
        
        if ( product.name === '' || product.price === '' ) {
            distpatch( validateAction( true ) );
            return;
        }
        distpatch( validateAction( false ) );


        addProduct( product );
    }

    return (
        <form action="" className="text-left" onSubmit={ onSubmit }>
            <div className="form-group">
              <label htmlFor="product-name-input">Product Name</label>
              <input type="text" name="name" id="product-name-input" className="form-control" placeholder="product name..." 
                value={ product.name }
                onChange={ onChange }
              />
            </div>
            <div className="form-group">
              <label htmlFor="product-price-input">Product Price</label>
              <input type="number" name="price" id="product-price-input" className="form-control" placeholder="product price..." 
                value={ product.price }
                onChange={ onChange }
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">ADD</button>
            {
                error ? <span className="badge badge-danger">*all fields are required</span> : null
            }
        </form>
    )
}

export default AddProduct;
