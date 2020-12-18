import React from "react";
import './check.css'
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import Subtotal from './Subtotal'
function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
    <div className="checkoutitem">
      <h2>Your Shopping Basket</h2>
      <hr />
     {cart.map((cart) => {
     return  <CheckoutItem key={cart.id }
          id={cart.id}
          image={cart.image}
          title={cart.title}
          price={cart.price}
          rate={cart.rate}
        />
     })}
     <hr/>
     </div>
      <Subtotal />
    </div>
  );
}

export default Checkout;
