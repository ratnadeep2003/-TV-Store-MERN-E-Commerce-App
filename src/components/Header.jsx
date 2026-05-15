import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                    <img style={{height:"80px"}} src="https://as1.ftcdn.net/v2/jpg/03/23/69/96/1000_F_323699603_P2eWqUOUiesuCeiIYPGXhXCqLOGi6LML.jpg" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/allProducts" className="nav-link">All Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/adminLogin" className="nav-link">Admin Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cartPage" className="nav-link">Cart</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/admin/addproduct" className="nav-link">Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/products" className="nav-link">Products</Link>
                            </li> */}
                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="button">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header