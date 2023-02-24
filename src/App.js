import React from "react";
import Header from "./components/Header/NavBar.js"
import ItemListContainer from "./components/Items/ItemListContainer.js";
import Estados from "./Estados.js"
import Users from "./components/Users"
import ItemDetailContainer from "./components/Items/ItemDetailContainer.js";

const App = () =>{

      const userName = `Miguel`
      const greetings = `Bienvenidos a Tienda Online`


      return (
        <>
          <Header 
          name={userName}
          id="1"
          lastname="Murua"
          prop1={1}
          prop2={1}
          prop3={1}
          prop4={1}
          prop5={1}

          />
          <ItemListContainer/>

          <ItemDetailContainer 
          tittle={greetings}
          />

          <Estados/>

          <Users />
        </>
      ) 

};

export default App;
