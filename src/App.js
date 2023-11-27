//Componente Principal de la aplicación

//Componentes importados 
import ProfileCard from "./components/ProfileCard";
import "./App.css"; 
import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";
import ItemCount from './components/ItemCount/ItemCount';
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
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
            <div className="container">
                
            </div>   
        </div>
         

    )
}

export default App;