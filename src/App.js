import React from "react";
import NavBar from "./components/Header/NavBar.js"
import ItemListContainer from "./components/Items/ItemListContainer.js";
import ItemDetailContainer from "./components/Items/ItemDetailContainer.js";
import Cart from "./components/Cart/CartContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "./context/CustomContext.js";

const App = () => {

  const userName = `Miguel`
  const greetings = `Bienvenidos a Tienda Online`
  
  return (

    <>
      <BrowserRouter>
      <CustomProvider>
        <NavBar name={userName} />
        <Routes>
          <Route path="/" element={<ItemListContainer tittle={greetings} />}></Route>

          <Route path="/categoria/:name" element={<ItemListContainer/>}></Route>

          <Route path="/product/:id" element={<ItemDetailContainer />}></Route>

          <Route path="/cart/:id" element={<Cart />}></Route>

        </Routes>
        </CustomProvider>
      </BrowserRouter>

    </>
  )

};

export default App;
