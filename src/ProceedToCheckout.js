import React,{useEffect} from "react";
import CheckoutItem from "./CheckoutItem";
import { useStateValue } from "./StateProvider";
import "./ProceedToCheckOut.css";
import axios from 'axios'
import Payment from './Payment';
function ProceedToCheckout() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    axios.post("http://localhost:5000/Cart",{cartdata:cart}).then(d=>console.log(d)).catch(e=>console.log(e))
   
  }, [])
  

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
                image={cart.Image}
                title={cart.title}
                price={cart.price}
                rate={cart.Rating}
                btn
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
