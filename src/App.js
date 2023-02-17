import React from "react";
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer";


const App = () =>{

      const userName = `Miguel`
      const greetings = `Bienvenidos a Food Lomos`

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

          
          />

        </>
      ) 

};

export default App;
