import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import { verificaSiExisteEnCarrito } from "../../helpers";

const ItemCount = ({ item }) => {

  const { carrito, agregarAlCarrito } = CartProvider();
  const {stock} = item
  const [cantidad, setCantidad] = useState(1);

  let producto = item && {
    ...item,
    cantidad,
  };

  const alAgregarAlCarrito = () => {
    if (stock < 0 || cantidad <= 0) return;
    agregarAlCarrito(producto);
  };

  const sumarCantidad = () => {
    if (stock - 1 > cantidad) {
      setCantidad(cantidad + 1);
    }
  };

  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      {!verificaSiExisteEnCarrito(carrito, item) ? (
        <>
          <div className="row border mx-0">
            <div className="col-9 text-uppercase fs-3">disponible</div>
            <div className="col-3 text-center fs-3">{item.stock - 1}</div>
          </div>
          <div className="row border my-4 mx-auto d-flex align-items-center">
            <div className="col col-3 d-flex">
              <button
                onClick={restarCantidad}
                className="btn px-4 mx-auto text-danger fs-2"
              >
                -
              </button>
            </div>
            <div className="col col-6 text-center fs-5">{cantidad}</div>
            <div className="col col-3 d-flex">
              <button
                onClick={sumarCantidad}
                className="btn  px-3 text-success mx-auto fs-2"
              >
                +
              </button>
            </div>
          </div>
          <button
            className="btn btn-warning w-100 my-3 text-uppercase"
            onClick={() => alAgregarAlCarrito(producto)}
          >
            agregar al carrito
          </button>
        </>
      ) : (
        <Link className="btn btn-success w-100 my-3 text-uppercase" to="/cart">
          ir al carrito
        </Link>
      )}

      <Link to="/" className="btn btn-dark w-100 my-3 text-uppercase">
        volver a comprar
      </Link>
    </div>
  );
};

export default ItemCount;
