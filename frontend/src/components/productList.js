import { useEffect, useState } from "react"
import ProdItem from "./productItem"
import { getAllProduct } from "../api/productService"

function ProductList ({searchQuery}){

    const [productData, setProductData] = useState([])

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{

        if (productData.length === 0){

            setLoading(true);
            getAllProduct().then((res)=>{

                setProductData(res.data);
                setLoading(false)
            }).catch((error)=>{
                setError(error);
                setLoading(false)
            })
        }

    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    const filterProds = productData.filter((prod)=>(
        prod.title && prod.title.toLowerCase().includes(searchQuery.toLowerCase())
    ))


    return (
        <div>
          
            <ProdItem prods={filterProds}></ProdItem>
            
        </div>
    )
}

export default ProductList;
