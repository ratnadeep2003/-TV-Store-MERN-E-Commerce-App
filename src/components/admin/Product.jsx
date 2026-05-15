import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Product() {
    const [newData, setNewData] = useState([]);

    function loadData() {
        axios.get("https://69e7305c68208c1debe87291.mockapi.io/products")
            .then((res) => {
                setNewData(res.data);
            })
    };

    useEffect(() => {
        loadData();
    }, []);

    function handleDelete(id) {
        axios.delete("https://69e7305c68208c1debe87291.mockapi.io/products/" + id)
            .then((res) => {
                console.log(res.data);
                alert("Data Deleted ✔👍")
                loadData();
            })
    };

    return (
        <div>
            <div className="col-lg-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Product Name</th>
                            <th>Manufacturer Name</th>
                            <th>Manufacturer Brand</th>
                            <th>Price</th>
                            <th>Product Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newData.map((eachData, i) => (
                            <tr key={eachData.id}>
                                <td>{i + 1}</td>
                                <td>{eachData.product_name}</td>
                                <td>{eachData.manufacturer_name}</td>
                                <td>{eachData.manufacturer_brand}</td>
                                <td>{eachData.price}</td>
                                <td>{eachData.product_description}</td>
                                <td>
                                    <Link to={"/admin/addproduct/" + eachData.id}>
                                        <button className='btn btn-primary m-1'><i className="fa-solid fa-pencil"></i></button>
                                    </Link>
                                    <button onClick={() => handleDelete(eachData.id)} className='btn btn-danger'>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product