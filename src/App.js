import React from "react";
import NavBar from "./components/Header/NavBar.js"
import ItemListContainer from "./components/Items/ItemListContainer.js";
import Estados from "./Estados.js"
import Users from "./components/Users"
import ItemDetailContainer from "./components/Items/ItemDetailContainer.js";
import {BrowserRouter} from "react-router-dom";



const App = () =>{

      const userName = `Miguel`
      const greetings = `Bienvenidos a Tienda Online`

      return (

      <> 
        <BrowserRouter>
          <NavBar
          name={userName}
          />
          <ItemListContainer           
          tittle={greetings}/>

          <ItemDetailContainer/>

          <Estados/>

          <Users />
        </BrowserRouter>

      </> 
      ) 

};

export default App;
