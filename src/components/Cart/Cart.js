import React from "react";
import "./Cart.css";
const Cart = (props) => {
  return (
    <div className="Cart">
      <button onClick={props.removeItem}>
        <i className="fas fa-minus-circle"></i>
      </button>
      <ul>{props.itemsList}</ul>
    </div>
  );
};
export default Cart;
