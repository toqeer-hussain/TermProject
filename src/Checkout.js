import React,{useState,useEffect} from "react";
import './check.css'
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import Subtotal from './Subtotal'
import axios from 'axios'
function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  const [product, setproduct] = useState([])
  console.log("cart in checkout",cart)
   useEffect(()=>{
  // axios.get('http://localhost:5000/getcart').then(d=>{
  //   console.log("getcard",d.data)
  //   d.data.map(item=>{
  //     setproduct((oldstate)=>([...oldstate,item]))
  //   })

  // }).catch(e=>console.log(e))
 },[])
// console.log("Cart item value",product[0]?.product.ProductName)

  return (
    <div className="checkout">
    <div className="checkoutitem">
      <h3>Your Shopping Basket</h3>
      <hr />
     {cart.map((cart) => {
     return  <CheckoutItem 
        
          id={cart?.id}
          key={cart?.id}
          image={cart?.Image}
          title={cart?.productname}
          price={cart?.price}
          rate={cart?.Rating}
          quantity={cart?.quantity}
        />
     })}
     <hr/>
     </div>
      <Subtotal />
    </div>
  );
}

export default Checkout;
