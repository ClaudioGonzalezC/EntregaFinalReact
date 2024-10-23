import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import LocationFilter from "./components/layouts/locationFilter/LocationFilter";

function App() {
  const isDarkMode = false;


  return (
    <BrowserRouter>
      <Navbar />
      <LocationFilter />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route
          path={"/category/:categoryName"}
          element={<ItemListContainer />}
        />

        <Route path={"/cart"} element={<CartContainer />} />

        <Route path={"/productDetail/:id"} element={<ItemDetailContainer />} />

        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;