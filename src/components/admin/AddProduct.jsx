import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function AddProduct() {
  const labelStyle = {
    display: "block", fontSize: "13px", fontWeight: "500",
    color: "#4a4f6a", marginBottom: "8px"
  };

  const inputStyle = {
    width: "100%", height: "44px", border: "1.5px solid #e8eaf0",
    borderRadius: "8px", padding: "0 12px", fontSize: "14px",
    color: "#1a1d2e", outline: "none", boxSizing: "border-box",
    fontFamily: "inherit", background: "#fff"
  };

  let navigate = useNavigate();

  let { id } = useParams();

  const [data, setData] = useState({
    product_name: "",
    manufacturer_name: "",
    manufacturer_brand: "",
    price: "",
    image: "",
    product_description: ""
  });

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value })
  };

  const [newData, setNewData] = useState([]);



  function handleSubmit(e) {
    e.preventDefault();
    if (id === undefined) {
      axios.post("https://69e7305c68208c1debe87291.mockapi.io/products", data)
      .then((res) => {
        console.log(res.data);
        alert("data saved successfully")

        setData({
          product_name: "",
          manufacturer_name: "",
          manufacturer_brand: "",
          price: "",
          image: "",
          product_description: ""
        })
      })
    } else {
      axios.put("https://69e7305c68208c1debe87291.mockapi.io/products/" + id, data)
        .then((res) => {
          console.log(res.data)
          alert("Data Updated ✔👍")

          navigate('/product');
        });
    };

  }

  useEffect(() => {
    if (id) {
      axios.get("https://69e7305c68208c1debe87291.mockapi.io/products/" + id)
        .then((res) => {
          const data = res.data;
          setData({
            product_name: data.product_name,
            manufacturer_name: data.manufacturer_name,
            manufacturer_brand: data.manufacturer_brand,
            price: data.price,
            image: data.image,
            product_description: data.product_description
          });
        });
    }
  }, []);







  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      background: "#f4f6fb",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "40px 16px"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <div style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
        width: "100%",
        maxWidth: "860px",
        overflow: "hidden"
      }}>



        {/* Form Body */}
        <div className="row">
          <div className="col-lg-12">
            <div style={{ padding: "32px" }}>
              <div style={{ marginBottom: "24px" }}>
                <label style={labelStyle}>Product Name</label>
                <input value={data.product_name} onChange={handleChange} style={inputStyle} id='product_name' />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px", marginBottom: "24px" }}>
                <div>
                  <label style={labelStyle}>Manufacturer Name</label>
                  <input value={data.manufacturer_name} onChange={handleChange} style={inputStyle} id='manufacturer_name' />
                </div>
                <div>
                  <label style={labelStyle}>Manufacturer Brand</label>
                  <input value={data.manufacturer_brand} onChange={handleChange} style={inputStyle} id='manufacturer_brand' />
                </div>
                <div>
                  <label style={labelStyle}>Price</label>
                  <input value={data.price} onChange={handleChange} style={inputStyle} id='price' />
                </div>
                <div>
                  <label style={labelStyle}>Image</label>
                  <input value={data.image} onChange={handleChange} style={inputStyle} id='image' />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Product Description</label>
                <input value={data.product_description} onChange={handleChange} id='product_description' style={{ ...inputStyle, height: "110px", resize: "vertical", paddingTop: "10px" }} />
              </div>
              <button onClick={handleSubmit} type='submit' class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct
