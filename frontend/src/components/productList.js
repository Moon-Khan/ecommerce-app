import { useEffect, useState } from "react"
import ProdItem from "./productItem"

function ProductList ({searchQuery}){

    const [productData, setProductData] = useState([])

    useEffect( ()=>{
        fetch(`https://fakestoreapi.com/products`).then(res=> res.json()).then(data => setProductData(data))

    }, [])

    const filterProds = productData.filter(prod=>(
        prod.title && prod.title.toLowerCase().includes(searchQuery.toLowerCase())
    ))


    return (
        <div>
          
            <ProdItem prods={filterProds}></ProdItem>
            
        </div>
    )
}

export default ProductList;
