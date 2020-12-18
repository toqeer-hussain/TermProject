import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";

function CheckoutItem({ image, id, price, title, rate ,btn}) {
  const [{ cart }, dispatch] = useStateValue();
  const [star, setstar] = useState([]);

  useEffect(() => {
    for (let i = 0; i < Math.floor(rate); i++) {
      setstar((oldstate) => [...oldstate, <StarIcon />]);
    }
    if (rate % 1 === 0.5) {
      setstar((oldstate) => [...oldstate, <StarHalfIcon />]);
    }
  }, []);
  const Remove = () => {
    dispatch({
      id: id,
      type: "REMOVE",
    });
  };
  return (
    <div className="checkout">
    <hr/>
      <div className="Cart">
        <img src={image} />
        <div className="cart_info">
          <h3>{title}</h3>
          <h2>
            {price}
            <small>$</small>
          </h2>
         <h4 style={{color:"#f0c14b"}}> {star}</h4>
          {btn ? " ":<button onClick={Remove}>Remove From Cart</button>}
          
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
