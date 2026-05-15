import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("isLoggedIn")
        navigate("/adminlogin")
    };
    return (
        <>
            <div className="row">
                <div className="col-lg-3">
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                <Link
                                    to="/admin"
                                    className="list-group-item list-group-item-action py-2 ripple"
                                >
                                    <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main Dashboard</span>
                                </Link>
                                <Link to="/admin/addproduct" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="fas fa-chart-area fa-fw me-3"></i><span>Add Product</span>
                                </Link>
                                <Link to="/admin/products" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="fas fa-lock fa-fw me-3"></i><span>Products</span>
                                </Link>
                                <button onClick={handleLogout} className="btn btn-danger list-group-item list-group-item-action py-2 ripple">
                                    <i class="fas fa-money-bill fa-fw me-3"></i><span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Sidebar