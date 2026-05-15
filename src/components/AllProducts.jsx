import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AllProducts() {
	const [data, setData] = useState([]);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		axios.get("https://69e7305c68208c1debe87291.mockapi.io/products").then((res) => {
			setData(res.data);
		})
	}, []);

	function addToCart(product) {
		let cart = JSON.parse(localStorage.getItem("cart")) || [];
		let cartProduct = { ...product, quantity: 1 };
		cart.push(cartProduct);
		localStorage.setItem("cart", JSON.stringify(cart));
		alert(`${product.product_name} added to cart!`);
		setSelected(null);
	}

	return (
		<div>
			<div className="row">
				{data.map((product) => (
					<div className="col-lg-3" key={product.id}>
						<div className="card m-1 h-100 d-flex flex-column">
							<img src={product.image} className="card-img-top" alt={product.product_name} />
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">{product.product_name}</h5>
								<p className="card-text flex-grow-1">{product.product_description}</p>
								<button className="btn btn-primary mt-auto" onClick={() => setSelected(product)}>
									View Details
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Overlay */}
			{selected && (
				<div
					onClick={() => setSelected(null)}
					style={{
						position: "fixed", inset: 0,
						backgroundColor: "rgba(0,0,0,0.6)",
						display: "flex", alignItems: "center", justifyContent: "center",
						zIndex: 1000,
						animation: "fadeIn 0.3s ease"
					}}
				>
					<div
						onClick={(e) => e.stopPropagation()}
						style={{
							background: "#fff", borderRadius: "12px",
							maxWidth: "500px", width: "90%",
							padding: "24px", position: "relative",
							animation: "slideUp 0.3s ease"
						}}
					>
						{/* Header: title + close button */}
						<div className="d-flex justify-content-between align-items-center mb-3">
							<h5 className="m-0">Product Details</h5>
							<button
								onClick={() => setSelected(null)}
								className="btn-close"
							></button>
						</div>

						{/* Product info */}
						<img src={selected.image} alt={selected.product_name}
							style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }} />
						<h4>{selected.product_name}</h4>
						<p>{selected.product_description}</p>
						<p><strong>Price: </strong>₹{selected.price}</p>

						{/* Add to Cart button */}
						<button
							onClick={() => addToCart(selected)}
							className="btn btn-success w-100 mt-2"
						>
							Add to Cart
						</button>
					</div>
				</div>
			)}

			{/* Animation keyframes */}
			<style>{`
				@keyframes slideUp {
					from { transform: translateY(60px); opacity: 0; }
					to   { transform: translateY(0);    opacity: 1; }
				}
				@keyframes fadeIn {
					from { opacity: 0; }
					to   { opacity: 1; }
				}
			`}</style>
		</div>
	)
}

export default AllProducts