import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

const Categorias = () => {

    const enlacesNav =
        [
            { id: 0, name: `Electronica` , route:`/categoria/electronics` },
            { id: 1, name: `Joyeria` , route:`/categoria/jewelery` },
            { id: 2, name: `Ropa Hombre` , route:`/categoria/men's clothing`},
            { id: 3, name: `Ropa Mujer` , route:`/categoria/women's clothing`}
        ];

    return (
        <nav className="navBar">
            {
                enlacesNav.map((enlace) => {
                    return <ul>
                    <li>
                        <NavLink key={enlace.id} to={enlace.route}>{enlace.name}
                        </NavLink>
                    </li>
                    </ul>
                })
            }
        </nav>
    );


};

export default Categorias;