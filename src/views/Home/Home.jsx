import React from "react";
import Footer from "../../components/Footer/Footer";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <Footer />
    </>
  );
};

export default Home;
