import { useContext } from "react";
import { UserContext } from "./main";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Heeader({searchQuery}) {
  const user = useContext(UserContext);

  const cartItems = useSelector((state)=>state.cart.item)
  const navigate = useNavigate();
  
  return (
    <div className="header">
      <h1 className="header-title">PRODUCT APP</h1>
      <input type="text" placeholder="Search..." className="header-search" onChange={(e)=>searchQuery(e.target.value)}/>
      <div className="header-right">
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          🛒
          <span className="cart-count">{cartItems.length}</span>
        </div>
      <p className="header-username">{user.username}</p>
      </div>
    </div>
  );
}

export default Heeader;
