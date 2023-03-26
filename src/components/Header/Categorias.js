import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

const Categorias = () => {

    const enlacesNav =
        [
            { id: 0, name: `Pizzas` , route:`/categoria/pizza` },
            { id: 1, name: `Burgers` , route:`/categoria/burgers` },
            { id: 2, name: `Lomos` , route:`/categoria/lomos`},
            { id: 3, name: `Empanadas` , route:`/categoria/empanadas`},
            { id: 4, name: `Papas` , route:`/categoria/papas`},
            { id: 5, name: `Ensaladas` , route:`/categoria/ensaladas`}
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