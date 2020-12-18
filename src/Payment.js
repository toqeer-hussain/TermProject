import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import './payment.css';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import  Currencyformat  from "react-currency-format";
import {db} from './Firebase';

function Payment() {
  const history = useHistory();
  const [error, seterror] = useState("");
  const [processing, setprocessing] = useState(false);
  const [disabled, setdisabled] = useState(true);
  const [succeed, setsucceed] = useState(false);
  const [client, setclient] = useState(null);

  const stripe = useStripe();
  const elements = useElements();
  const [{ cart }, dispatch] = useStateValue();
  const getCartTotal = () => {
    let sum = 0;
    cart.map((item) => (sum = sum + item.price));
    return sum;
  };
  useEffect(() => {
    const getCartTotal = () => {
      let sum = 0;
      cart.map((item) => (sum = sum + item.price));
      return sum;
    };

    const getclient = async () => {
    
        const endpoint='http://localhost:5001/clone-a55f8/us-central1/api'
      const response = await axios.post(
         `${endpoint}/payment/create?total=${getCartTotal() * 100}`,
      );
      setclient(response.data.clientsecret);
    };
    getclient();
  
  }, [cart]);

console.log(" your new created client is +>>>>>>>",client);
  const handleSubmit = async (event) => {

    event.preventDefault();
 console.log("Hit submit")
 setprocessing(true)
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const payload = await stripe
      .confirmCardPayment(client, {
        payment_method: {
          card: cardElement,
        },
      })
      .then(({ paymentIntent }) => {
        console.log("PAyment id",paymentIntent)
db.collection('order').doc(paymentIntent?.id).set({
    cart:cart,
    amount:paymentIntent.amount,
    created:paymentIntent.created,
})

          dispatch({
              type:'EMPATY_CART',
          })
        setprocessing(false);
        setsucceed(true);
        seterror(null);
        history.replace("/order");
      });
  };

  const handlechange = (e) => {
    setsucceed(false)
    seterror(e.error ? e.error.message : "");
    setdisabled(e.empty && true );
  };
  console.log(getCartTotal())
  return (
    <div className="payment">
    {getCartTotal() > 0?
      <form onSubmit={handleSubmit}>
        <Currencyformat
          renderText={(value) => (
            <div className="subtotal_info">
              <p>Order Total: <b>{value}</b></p>
            </div>
          )}
          decimalScale={2}
          value={getCartTotal()}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <CardElement className='enter' onChange={handlechange} />
        <button className="btn" type="submit" disabled={processing || succeed || disabled}>
          {processing ? 'Processing...': 'BUY NOW'}
        </button>
      </form>
      :""}
      <div>{error && error}</div>
    </div>
  );
}

export default Payment;
