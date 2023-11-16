//Componente Principal de la aplicación

import "./App.css"; 
import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App(){
        
    return (
        
        <div>
          
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">E-commerce</h1>  
                    <NavBar />
                   
                </div>
            </section>
            <ItemListContainer greeting={'Bienvenido'}/>
            <div className="container">
          
            </div>   
        </div>
         

    )
}

export default App;