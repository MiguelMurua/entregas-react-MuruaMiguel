import React from "react";
import "./NavBar.css";
import carrito from "../../assets/logotipo.png"
import CartWidget from '@mui/icons-material/ShoppingCart';


const Header = ({name, id }) => {
    
    const enlacesNav = [
        {id: 0 , name:`Inicio`},
        {id: 1 , name:`Productos`},
        {id: 2 , name: `Nosotros`},
        {id: 3 , name: `Contacto`}
    ];
    
    
    return (
        <div className="container">
            <div className="container-logo">
                <img src={carrito} alt="icono carrito" />
                <h1>Bienvenido "{name}"</h1>
            </div>
            <nav className="navBar">
                {
                    enlacesNav.map ((enlace)=>{
                        return <ul>
                            <li><a key={enlace.id} href="">{enlace.name}</a></li>
                        </ul>
                    })
                }
            </nav>
            <div className="container-carrito">
                <CartWidget fontSize="large" color="secondary" />
                <p>3</p>
            </div>
        </div>
    )
}

export default Header;