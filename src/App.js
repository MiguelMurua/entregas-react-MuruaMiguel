import React from "react";
import NavBar from "./components/Header/NavBar.js"
import ItemListContainer from "./components/Items/ItemListContainer.js";
import Estados from "./Estados.js"
import Users from "./components/Users"
import ItemDetailContainer from "./components/Items/ItemDetailContainer.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";



const App = () =>{

      const userName = `Miguel`
      const greetings = `Bienvenidos a Tienda Online`

      return (

      <> 
        <BrowserRouter>
          <NavBar name={userName}/>
          <Routes>
            <Route path="/" element={<ItemListContainer tittle={greetings}/>}></Route>
            
            <Route path="/cart" element={<ItemDetailContainer/>}></Route>
              
          </Routes>

          <Estados/>

          <Users />
        </BrowserRouter>

      </> 
      ) 

};

export default App;
