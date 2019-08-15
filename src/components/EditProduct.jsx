import React from 'react'

const EditProduct = () => {
    return (
        <form action="">
            <div class="form-group">
              <label for="">Name</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
        </form>

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

export default EditProduct
