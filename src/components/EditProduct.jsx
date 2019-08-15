import React from 'react'

const EditProduct = ( { product } ) => {
    return (
        <form>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input type="text" className="form-control mb-2" id="name" placeholder="" 
                        value={ product.name }    
                    />
                </div>
                <div className="col-auto">
                    <label className="sr-only" htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="price" placeholder="" 
                        value={ product.price }
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-danger mb-2">Update</button>
                </div>
            </div>
        </form>
    )
}

export default EditProduct
