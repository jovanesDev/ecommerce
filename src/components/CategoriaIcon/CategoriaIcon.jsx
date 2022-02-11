import React from "react";

const CategoriaIcon = ({ categoria,size }) => {
  return (
    <>
      {categoria === "xbox" ? (
        <i className={`fab fa-xbox text-success ${size}`}></i>
      ) : categoria === "pc" ? (
        <i className={`fas fa-desktop text-info ${size}`}></i>
      ) : (
        <i className={`fab fa-playstation text-dark bg-light rounded ${size}`}></i>
      )}
    </>
  );
};

export default CategoriaIcon;
