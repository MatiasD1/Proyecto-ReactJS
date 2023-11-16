import CartWidget from "../CardWidget/CardWidget"
import "./NavBar.css"

const NavBar = () => {//Utilizo en la etiqueta nav una clase de bulma

    return (
        
            <nav className="container has-text-centered"> 
            <div className="contenedor-del-nav">
                <div className="navbar">
                    <button className="custom-button">Celulares</button>
                    <button className="custom-button">Tablets</button>
                    <button className="custom-button">Notebooks</button>
                </div>
                <div  className="cart-widget">
                    <CartWidget/>
                </div> 
            </div>
            </nav>
        
    )
}

export default NavBar//le saqué el ; y anduvo wtf CONSULTAR