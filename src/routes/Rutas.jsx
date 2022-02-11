import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home"
import Cart from "../views/Cart/Cart"
import Category from "../views/Category/Category"
import Individual from "../views/Individual/Individual"
import Error from "../views/Error/Error"

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/games/:category" element={<Category/>} />
        <Route path="/item-detail/:id" element={<Individual />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
