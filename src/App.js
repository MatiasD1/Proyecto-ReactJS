//Componente Principal de la aplicación

import "./App.css"; 
import ProfileCard from "./components/ProfileCard/ProfileCard";
import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";
import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App(){
        
    return (
        
        <div >
          
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">Asistentes</h1>  
                    <NavBar />
                   
                </div>
            </section>
            <ItemListContainer greeting={'Bienvenido'}/>
            <div className="container">
          
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Alexa" arroba="@Alexa22" img={AlexaImg}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Cortana" arroba="@Cortana66" img={CortanaImg}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Siri" arroba="@Siri77" img={SiriImg}/>
                    </div>
                </div>
            </div>   
        </div>
         

    )
}

export default App;