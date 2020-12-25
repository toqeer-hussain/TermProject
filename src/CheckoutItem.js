import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import axios from 'axios'

function CheckoutItem({ image, id, price, title, rate ,btn,quantity}) {
  const [{ cart }, dispatch] = useStateValue();
  const [star, setstar] = useState([]);

 console.log("values in  checoutitem",image,id,price,title,rate)
 console.log("cart",cart)
  useEffect(() => {


    if(star?.length==0){
    for (let i = 0; i < Math.floor(rate); i++) {
      setstar((oldstate) => [...oldstate, <StarIcon />]);
    }
    if (rate % 1 === 0.5) {
      setstar((oldstate) => [...oldstate, <StarHalfIcon />]);
    }}
  }, []);
  const Remove = () => {
    dispatch({
      id: id,
      type: "REMOVE",
    });}
    const increase=()=>{
      dispatch({
        type:"INC",
        id:id
      })
    }
    const decrease=()=>{
      console.log("decclaaded")
    
    }

 


  return (
    <div className="checkout">
    <hr/>
      <div className="Cart">

        <img style={{minWidth:"330px"}} src={image} />
        <div className="cart_info">
          <h3>{title}</h3>
      
          <h2>
            {price}
            <small>$</small>
          </h2>
{!btn && <div><ArrowDropUpIcon onClick={increase} style={{fontSize:"45",padding:"0"}}/>
<h3> {quantity}</h3>
<ArrowDropDownIcon onClick={decrease} style={{fontSize:"45"}}/></div>}
         <h4 style={{color:"#f0c14b"}}> {star}</h4>
          {btn ? " ":<button onClick={Remove}>Remove From Cart</button>}
          
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
