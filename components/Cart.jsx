import React, { useContext } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "./CartContext";
import "../style/index.css";
export default function Cart() {
  const { cart, addToCart, deleteFromCart, currency } =
    useContext(CartContext);
  return (
    <div className="cart">
      <Navbar />

    

      {cart.length === 0 ? (
        <p style={{ position: "absolute", top: "260px", fontSize: "20px" }}>
          Your cart is empty
        </p>
      ) : (
        cart.map((p) => (
          <div className="product" key={p.id}>
            <div className="card" style={{ width: "18rem;" }}>
              <img src={p.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="fs-4">{p.name}</h3>
                <h4 className="fs-5">price is {currency.format(p.price)}</h4>
                <div className="btn_quantities d-flex justify-content-center align-items-center">
                  <button className="increase btn btn-success" onClick={() => addToCart(p)}>
                    +
                  </button>
                  <h4 className="quantity">the quantity is <strong className="text text-primary fw-bolder">{p.quantity}</strong></h4>
                  <button
                    className="decrease btn btn-danger"
                    onClick={() => deleteFromCart(p)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>

      
        ))
      )}
    </div>
  );
}
