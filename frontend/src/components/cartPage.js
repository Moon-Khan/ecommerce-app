
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../reducer/cartSlice";

function CartPage (){
    const cartItems = useSelector((state)=>state.cart.item)

    const dispatch = useDispatch();
    const handleRemoveFromCart = (item)=>{
      dispatch(removeFromCart(item))
    }
    return(
        <>
            {
                cartItems.length === 0 ? (
                    <p>your cart is empty</p>
                ):
                (
                    <ul className="cart-list">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} width={50} />
                            <div>
                                <h4>{item.title}</h4>
                                <p>${item.price}</p>
                            </div>
                            <button onClick={(e) =>{e.stopPropagation();handleRemoveFromCart (item)}}>remove from cart</button> 

                            </li>
                        ))}
                    </ul>
                )
            }
        </>
    )
}

export default CartPage;