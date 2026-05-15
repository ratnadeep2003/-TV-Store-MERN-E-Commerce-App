import React, { useEffect, useState } from 'react'

function CartPage() {
  const [cartProduct, setCartProduct] = useState([]);
  const [code, setCode] = useState("");

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProduct(cart);
  }, []);

  function removeProduct(productId) {
    let updated = cartProduct.filter((p) => p.id != productId);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartProduct(updated);
  }

  function updateQuantity(productId, newQty) {
    if (newQty < 1) return;
    let updated = cartProduct.map((p) =>
      p.id == productId ? { ...p, quantity: newQty } : p
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartProduct(updated);
  }

  const totalPrice = cartProduct.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div>
      <section className="h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0">Shopping Cart</h3>
                <p className="mb-0 text-muted">{cartProduct.length} items</p>
              </div>

              {cartProduct.length === 0 && (
                <div className="text-center py-5">
                  <h5 className="text-muted">Your cart is empty</h5>
                </div>
              )}

              {cartProduct.map((product) => (
                <div className="card rounded-3 mb-4" key={product.id}>
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">

                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img src={product.image} className="img-fluid rounded-3" alt={product.product_name} />
                      </div>

                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{product.product_name}</p>
                      </div>

                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                        <button className="btn btn-link px-2"
                          onClick={() => updateQuantity(product.id, product.quantity - 1)}>
                          <i className="fas fa-minus"></i>
                        </button>
                        <input
                          min="1" type="number" value={product.quantity}
                          onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                          className="form-control form-control-sm text-center"
                          style={{ width: "60px" }}
                        />
                        <button className="btn btn-link px-2"
                          onClick={() => updateQuantity(product.id, product.quantity + 1)}>
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>

                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">₹{product.price * product.quantity}</h5>
                      </div>

                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button className="btn btn-link text-danger p-0"
                          onClick={() => removeProduct(product.id)}>
                          <i className="fas fa-trash fa-lg"></i>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

              {cartProduct.length > 0 && (
                <>
                  <div className="card mb-4">
                    <div className="card-body p-4 d-flex flex-row">
                      <input type="text" className="form-control form-control-lg" placeholder="Discount code" />
                      <button className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Total: ₹{totalPrice}</h5>
                      <button className="btn btn-warning btn-lg">Proceed to Pay</button>
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartPage