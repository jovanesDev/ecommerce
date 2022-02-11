import React from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";

const CartWidget = ({ classname }) => {
  const { carrito } = CartProvider();

  return (
    <>
      <Link to="/cart" className={classname}>
        <div className="d-flex align-items-center">
          <i className="fas fa-shopping-cart btn btn-sm text-light"></i>
          <span className="text-light fs-5">{carrito.length}</span>
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
