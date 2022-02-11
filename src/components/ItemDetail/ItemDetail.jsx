import React from "react";
// import useFirebase from "../../hooks/useFirebase";
import Carousel from "../Carousel/Carousel";
import CategoriaIcon from "../CategoriaIcon/CategoriaIcon";
import Footer from "../Footer/Footer";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  // const {fetchUpdateDoc} = useFirebase()

  return (
    <div className="w-100  full-height">
      <div className="container-fluid py-4">
        {item.imagenes && <Carousel imagenes={item.imagenes} />}
        <div className="container-fluid">
          <div className="row mt-4 ">
            <div className="col col-12 col-lg-6">
              <h4 className="display-4 text-center">{item.nombre}</h4>
              <h6 className="fs-5 fw-light lh-base p-lg-3">
                {item.descripcion}
              </h6>

              <div className="d-flex justify-content-between border px-4 align-items-center">
                <p className="fs-4 m-0 text-uppercase">plataforma</p>
                <CategoriaIcon categoria={item.categoria} size="fs-3" />
              </div>
              <div className="d-flex justify-content-between border my-2 px-4 align-items-center">
                <p className="fs-5 m-0 text-uppercase">desarrollado</p>
                <p className="fw-light m-0 text-uppercase">
                  '{item.desarrollador}'
                </p>
              </div>
              <div className="d-flex justify-content-between border my-2 px-4 align-items-center">
                <p className="fs-4 m-0 text-uppercase">año de lanzamiento</p>
                <p className="fs-4 m-0 text-uppercase">{item.year}</p>
              </div>
            </div>
            <div className="col col-12 col-lg-6 my-5 border border-dark py-4">
              {<ItemCount item={item} />}
            </div>
            {/* <div className="col col-12 col-lg-6 my-5 border border-dark py-4">
              <button className="btn btn-danger" onClick={() => fetchUpdateDoc({id:item.id})}> Actualizar</button>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetail;
