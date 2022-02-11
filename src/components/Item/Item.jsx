import React from "react";
import { Link } from "react-router-dom";
import CategoriaIcon from "../CategoriaIcon/CategoriaIcon";

const Item = ({
  item: { nombre, imagen, descripcion, precio, stock, categoria, id, year },
}) => {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-4 my-4">
      <div className="card">
        <img
          src={imagen}
          className="card-img-top"
          style={{ height: "300px" }}
          alt={nombre}
        />
        <div>
          {year > 2020 && (
            <div className="w-100 position-absolute top-0 rounded opacity-half text-center bg-success text-light text-uppercase">
              Nuevo
            </div>
          )}
        </div>
        <div className="card-body">
          <h6 className="card-title fs-4 text-center text-uppercase">
            {nombre}
          </h6>
          <p className="card-text text-with-dots my-4 col-md-8">
            {descripcion}
          </p>
          <div className="row my-2 border d-flex aling-items-center">
            <div className="col col-10">
              <p className="fs-5 m-0 p-0 text-uppercase">Disponible</p>
            </div>
            <div className="col col-2">
              <span className="ml-3 fs-5 col col-6">{stock}</span>
            </div>
          </div>
          <div className="row my-2 border d-flex aling-items-center">
            <div className="col col-10">
              <p className="fs-5 m-0 p-0 text-uppercase">plataforma</p>
            </div>
            <div className="col col-2">
              <span className="ml-3 fs-5 col col-6">
                <CategoriaIcon categoria={categoria}/>
              </span>
            </div>
          </div>
          <div className="row my-2 border d-flex aling-items-center">
            <div className="col col-8">
              <p className="fs-5 m-0 p-0 text-uppercase">precio</p>
            </div>
            <div className="col col-4">
              <span className="ml-3 fs-6 col col-6 text-right">
                ARS ${precio}
              </span>
            </div>
          </div>
          {/* <ItemCount item={item} dinamicStock={dinamicStock} setDinamicStock={setDinamicStock}/> */}
          <Link to={`/item-detail/${id}`} className="btn btn-dark w-100">
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
