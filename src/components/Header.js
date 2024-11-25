import { useState } from "react";
import { LOGO_URL } from "../utils/constants"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const onlineStatus = useOnlineStatus()
  const [btn , setBtn] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="btn btn-sm" onClick={()=>btn === "Login" ? setBtn("Logout"):setBtn("Login")}>{btn}</button>
          </ul> 
        </div>
      </div>
    );
  };