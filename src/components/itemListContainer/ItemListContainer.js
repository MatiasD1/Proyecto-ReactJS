import "./ItemListContainer.css" 
import { useState, useEffect } from "react" //4.2k (gzipped: 1.8k) 
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response=> {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    
    return (
        <div className="greeting">
            <h1>{greeting}</h1>
            <itemList products={products}/>
        </div>
    )
}

export default ItemListContainer