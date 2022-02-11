import React from "react";
import { CartProvider } from "../../context/CartContext";

const CartElement = ({item:{imagen,nombre,cantidad,precio,id}}) => {

  const {sacarDelCarrito} = CartProvider()
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img src={imagen} className="w-100 h-100" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <div className="row my-2 border">
                <div className="col col-10 text-uppercase">
                    cantidad 
                </div>
                <div className="col col-2">{cantidad}</div>
            </div>
            <div className="row my-2 border">
                <div className="col col-7 text-uppercase">
                    precio
                </div>
                <div className="col col-5">ARS ${precio}</div>
            </div>
            <button onClick={()=>sacarDelCarrito(id)} className="btn btn-danger text-uppercase mt-2 w-100">
            <i className="fas fa-trash-alt mx-3"></i>
                eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartElement;
