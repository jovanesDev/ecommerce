import React, { useEffect} from "react";
import { GlobalProvider } from "../../context/GlobalContext";
import useFirebase from "../../hooks/useFirebase";
import ItemList from "../ItemList/ItemList";
// import axios from "axios";
const ItemListContainer = ({ filter }) => {


  const { productos,fetchGetDataCollection } = useFirebase();
  const { buscar } = GlobalProvider();

  useEffect(() => {
    fetchGetDataCollection();
    // eslint-disable-next-line
  },[]);

  const filtered = filter
    ? productos.filter((e) => e.categoria === filter)
    : productos;
  const busqueda = filtered.filter((f) =>
    f.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
  );

  // const obtnerDatos = async () => {
  //   try {
  //     const resultado = await axios.get("https://pokeapi.co/api/v2/pokemon")
  //     console.log(resultado.data.results)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  // useEffect(() => {
  //   //obtnerDatos()
  //   //fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>  res.json()).then((res) => console.log(res.results))
  // },[])

  return (
    <div className="bg-venom full-height">
      <ItemList items={busqueda} />
    </div>
  );
};

export default ItemListContainer;
