import React from "react";
import "./NavBar.css"


const Categorias = ()=>{

    const enlacesNav =
        [
            {id: 0 , name:`Inicio`},
            {id: 1 , name:`Productos`},
            {id: 2 , name: `Nosotros`},
            {id: 3 , name: `Contacto`}
        ];

    return (
        <nav className="navBar">
        {
            enlacesNav.map ((enlace)=>{
                return <ul>
                            <li><a key={enlace.id} href="">{enlace.name}</a></li>
                        </ul>
            })
        }
        </nav>
    );


};

export default Categorias;