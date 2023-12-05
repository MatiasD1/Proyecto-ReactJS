//Componente Principal de la aplicación

//Componentes importados 
import "./App.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCount from './components/ItemCount/ItemCount';

function App(){
        
    return (
        
        <div className="App">
          {/*  <section className="hero is-primary">
                <div className="hero-body">
                 <h1 className="title">E-commerce</h1> */}
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<ItemListContainer/>}/>
                            <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
                            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>        
                        </Routes>
                    </BrowserRouter>  
               {/* </div>
            </section>*/}
            <ItemListContainer greeting={'Bienvenido'}/>
                <ItemDetailContainer /> 
        </div>
         

    )
}

export default App;