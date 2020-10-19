import React from "react";
import "./Groceries.css";

const Groceries = (props) => {
  return (
    ///////////////

    //////////////
    <div className="Groceries">
      <button onClick={props.addToCart}>
        <i className="fas fa-plus"></i>
      </button>
      <h3 onClick={props.addToCart}> {props.name}</h3>
    </div>
  );
};
export default Groceries;
