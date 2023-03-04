import React from "react";
import NavBar from "./components/Header/NavBar.js"
import ItemListContainer from "./components/Items/ItemListContainer.js";
import ItemDetailContainer from "./components/Items/ItemDetailContainer.js";
import Cart from "./components/Cart/CartContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {

  const userName = `Miguel`
  const greetings = `Bienvenidos a Tienda Online`

  return (

    <>
      <BrowserRouter>
        <NavBar name={userName} />
        <Routes>
          <Route path="/" element={<ItemListContainer tittle={greetings} />}></Route>

          <Route path="/categoria/:name" element={<ItemListContainer tittle={greetings} />}></Route>

          <Route path="/product/:id" element={<ItemDetailContainer />}></Route>

          <Route path="/cart/:id" element={<Cart />}></Route>

        </Routes>
      </BrowserRouter>

    </>
  )

};

export default App;
