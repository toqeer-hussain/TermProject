import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import "./Nav.css";
import { auth } from "./Firebase";
import axios from 'axios'
function Nav() {
  const history=useHistory()
  const [{  cart,user }, dispatch] = useStateValue();
  const log=()=>{
    axios.defaults.headers.common['Authorization-token'] = "";
    dispatch({type:"REMOVE_USER"})
    console.log("Logout")
    history.push('/')
  }
  return (
    <div className="Nav">
      <div className="Nav_left">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </div>
      <div className="Nav_center" fontSize="inherit">
        <input placeholder="Search Here" />
        <SearchIcon fontSize="large" />
      </div>
      <div className="Nav_right">
      <Link className="Link" to={!user && "/login"}>
        <div className="username">
          <h5>hello,{user}</h5>
          {user ?<h4 onClick={log}>SignOut</h4>:<h4 onClick={()=>history.push('/login')}>SignIn</h4>}
         
        </div> </Link>
        <div className="order">
          <h5>Return</h5>
          <h4>& Orders</h4>
        </div>
       
        <Link className="textLink" to={cart.length>0 && "/checkout"}>
          <div className="cart">
            <AddShoppingCartIcon />

            <h3>{cart.length}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
