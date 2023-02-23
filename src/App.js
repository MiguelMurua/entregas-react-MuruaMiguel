import React from "react";
import Header from "./components/Header/NavBar.js"
import ItemListContainer from "./components/ItemListContainer";
import Estados from "./Estados.js"
import Users from "./components/Users"


const App = () =>{

      const userName = `Miguel`
      const greetings = `Bienvenidos a Food Lomos`

      const stockUp = 100

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
          <ItemListContainer
          tittle={greetings}
          stock={stockUp}
          />

          <Estados/>

          <Users />
        </>
      ) 

};

export default App;
