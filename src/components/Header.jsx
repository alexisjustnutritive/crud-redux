import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg bg-secondary">
            <div className="container">
                <Link to='/' className="text-white">CRUD REDUX AXIOS</Link>
                <Link to='/product/add' className="btn btn-primary">ADD PRODUCT &#43;</Link>
            </div>
        </header>
    )
}

export default Header;