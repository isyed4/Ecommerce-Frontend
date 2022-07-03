import React from "react";
import Subtotal from "./Subtotal";

function Checkout(props) {
  const displayCartItems = props.cartItem.map((electronic, index) => {
    return (
      <>
        <li>{electronic.name}</li>
        <li>{electronic.price}</li>
        <li>{electronic.rating}</li>
        <img src={electronic.image_url} alt="electronic image" />
        <button onClick={() => props.handleRemoveItem(index)}>
          Remove Item
        </button>
      </>
    );
  });

  return (
    <div className="checkout">
      <div>
        <h2 className="checkout__title">Your Shopping Cart</h2>
        <ul className="displayCartItems">{displayCartItems}</ul>
      </div>

      <div>
        <h2 className="checkout__right">
          {" "}
          <Subtotal />{" "}
        </h2>
      </div>
    </div>
  );
}

export default Checkout;
