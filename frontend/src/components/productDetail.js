import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function ProductDetail(){

    const {id} = useParams();
    
    const location = useLocation();

    const [productData, setProductData] = useState(location.state?.product || null);

    useEffect(()=>{
        if (!productData){
            fetch(`https://fakestoreapi.com/products/${id}`).then(res=> res.json()).then(data => setProductData(data))

        }
    }, [id,productData])

    if (!productData) return <p>Loading...</p>;


    return(
        <div>
            <h2>{productData.title}</h2>
            <img src={productData.image} alt={productData.title} width="200" />
            <p>{productData.description}</p>
            <p>Price: ${productData.price}</p>

        </div>
    )
}

export default ProductDetail;
