import { useContext } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import "../style/index.css";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";
export default function MainProduct(props) {
  const { addToCart, currency } = useContext(CartContext);
  const data = props.data;
  return (
    <div className="product_container">
      <Navbar />
      {data.map((p) => (
        <div className="product" key={p.id}>
          <div className="card" style={{ width: "18rem;" }}>
            <img src={p.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="fs-4">{p.name}</h3>
              <h4 className="fs-5">price is {currency.format(p.price)}</h4>
              <Link to={"/components/Cart"} target="_blank">
                <button className="btn btn-primary" onClick={() => addToCart(p)}>
                  Add to cart
                </button>
              </Link>
            </div>
          </div>

        
        </div>
      ))}
    </div>
  );
}
