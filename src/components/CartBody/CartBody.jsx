import React from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import { dameTotat } from "../../helpers";
import CartElement from "../CartElement/CartElement";
import Formulario from "../Formulario/Formulario";

const CartBody = () => {
  const { carrito, sacarDelCarrito,limpiarTodoElCarrito } = CartProvider();

  return (
    <div className="container-fluid">
      <div className={` ${carrito.length > 0 && " d-flex justify-content-between aling-items-center"} px-4`}>
        <h1 className="text-center text-uppercase my-5">checkout</h1>
       {carrito.length > 0 && <i onClick={limpiarTodoElCarrito} className="fas fa-trash-alt pointer btn my-5 fs-3 text-danger text-center"></i>}
      </div>

      {carrito.length > 0 && (
        <div className="container border m-lg-5 ">
          <div className="row">
            <div className="container  col col-12 col-md-6 my-4 py-2 container-scroll">
              {carrito.map((item,index) => (
                <CartElement key={index} item={item} quitar={sacarDelCarrito} />
              ))}
            </div>
            <div className="col col-12 col-md-6 py-2 my-4">
              <Formulario total={dameTotat(carrito)} compra={carrito} />
            </div>
          </div>
        </div>
      )}
      {carrito.length < 1 && (
        <div className="container full-height d-flex align-items-center justify-content-center ">
          <div className="w-50">
            <h3 className="text-center text-uppercase">
              el carrito esta vacio
            </h3>

            <div className="my-5 d-flex">
              <Link to="/" className="btn btn-primary w-100 text-uppercase">
                volver a comprar
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartBody;
