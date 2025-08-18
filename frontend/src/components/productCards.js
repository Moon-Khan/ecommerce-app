import { useState } from "react";
import "../styles/prodCard.css"
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../reducer/cartSlice";


function ProdCard({ prod }) {

    const [like, setLike] = useState(0);
    const navigate = useNavigate();

    const cartItems = useSelector((state)=>state.cart.item);
    const isInCart = cartItems.find((item)=>item.id === prod.id)

    const dispatch = useDispatch();

      const handleClick =()=>{
        navigate(`/product/${prod.id}`, {state: {product:prod}})
    }

    const handleAddToCart = ()=>{
      dispatch(addToCart(prod))
    } 

    const handleRemoveFromCart = ()=>{
      dispatch(removeFromCart(prod))
    }

    return (
     
          <div className="prod-card" onClick={handleClick}>
            <img src={prod.image} alt={prod.title} className="prod-image" />
            <h4 className="prod-title">{prod.title}</h4>
            <p className="prod-price">${prod.price}</p>
            <p className="prod-desc">{prod.description}</p>
            <span className="prod-rate">⭐ {prod.rating_rate}</span> 
            <span className="prod-count">👥 {prod.rating_count}</span>
            <button onClick={(e) =>{e.stopPropagation(); setLike(like+1)} }>Likes: {like}</button>

            {isInCart ?
              <button onClick={(e) =>{e.stopPropagation();handleRemoveFromCart ()}}>remove from cart</button> 
            :             
              <button onClick={ (e) =>{e.stopPropagation(); handleAddToCart()}}>add to cart</button>
            }
            

          </div>
    );
  } 
  
export default ProdCard;
  