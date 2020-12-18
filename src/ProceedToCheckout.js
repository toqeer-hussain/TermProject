import React from "react";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
import "./ProceedToCheckOut.css";

import Payment from './Payment';
function ProceedToCheckout() {
  const [{ cart }, dispatch] = useStateValue();

  
  

  return (
    <div className="Proceed">
      <div className="Item">
        Checkout (<b>{cart.length} </b>Item)
      </div>
      <h3>Review item and Delivery</h3>
      <hr />
      <div className="Proceed_Item">
        <div className="Checkout_item">
          {cart.map((cart) => {
            return (
              <CheckoutItem
                key={cart.id}
                id={cart.id}
                image={cart.image}
                title={cart.title}
                price={cart.price}
                rate={cart.rate}
              />
            );
          })}
        </div>
      </div>
      <hr />
      <div><Payment /></div>
      
    </div>
  );
}

export default ProceedToCheckout;
