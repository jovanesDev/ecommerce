import CartState from "./context/CartContext";
import GlobalState from "./context/GlobalContext";
import "./assets/styles/index.css";
import Layout from "./layout/Layout";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <>
      <GlobalState>
        <CartState>
          <Layout>
            <Rutas />
          </Layout>
        </CartState>
      </GlobalState>
    </>
  );
}

export default App;
