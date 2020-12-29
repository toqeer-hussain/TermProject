import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import "./Nav.css";

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
      <Link style={{textDecoration:"none"}} to="/"> 
      <div className="Nav_left">
     <h3 style={{fontSize:"25px",marginLeft:"25px"}}>E-Com</h3>
      </div></Link>
      <div className="Nav_center" fontSize="inherit">
       {user && <h5 style={{color: "rgb(202, 191, 191)",fontSize:"20px"}}>Hello,{user}</h5>}
      </div>
      <div className="Nav_right">
      <Link className="Link" to={!user && "/login"}>
        <div className="username">
          
          {user ?<h4 onClick={log}>SignOut</h4>:<h4 className="forhover" onClick={()=>history.push('/')} style={{color: "rgb(202, 191, 191)"}}>SignIn Registration</h4>}
         
        </div> </Link>
       <div className="order">
        <Link style={{textDecoration:"none"}} to='/order'>
        
          
          <h4  className="forhover" style={{color: "rgb(202, 191, 191)"}}> Orders</h4>
        </Link> 
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
// <input placeholder="Search Here" />
        // <SearchIcon fontSize="large" />