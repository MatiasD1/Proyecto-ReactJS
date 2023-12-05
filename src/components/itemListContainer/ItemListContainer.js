import "./ItemListContainer.css" 
import { useState, useEffect } from "react" //4.2k (gzipped: 1.8k) 
import { getProductById, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from 'react-router-dom' //1.7k (gzipped: 809)

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        /*
        getProducts()
            .then(response=> {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])*/
        const asyncFunc = categoryId ? getProductById : getProducts 

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    
    return (
        <div className="greeting">
            <h1>{greeting}</h1>
            <itemList products={products}/>
        </div>
    )
}

export default ItemListContainer