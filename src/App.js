//Componente Principal de la aplicación
import ProfileCard from "./components/ProfileCard";
import "./App.css"; 
import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";
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
            <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Alexa" arroba="@Alexa22" img={AlexaImg}>
                            <div>
                                <h3>Mensaje enviado desde el padre</h3>
                                <p>Texto......</p>
                            </div>
                        </ProfileCard>                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Cortana" arroba="@Cortana66" img={CortanaImg}> 
                            <div>
                                <h3>Mensaje enviado desde el padre</h3>
                                <p>Texto......</p>
                            </div>
                        </ProfileCard>                  
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Siri" arroba="@Siri77" img={SiriImg}> 
                            <div>
                                <h3>Mensaje enviado desde el padre</h3>
                                <p>Texto......</p>
                            </div>
                        </ProfileCard>                  
                    </div>

                </div>
            </div>   
        </div>
         

    )
}

export default App;