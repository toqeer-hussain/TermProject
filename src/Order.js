import React from 'react'
import './order.css'
import {db} from './Firebase';
import { useEffect  } from 'react';
import { useState } from 'react';
import CheckoutItem from './CheckoutItem';
// { image, id, price, title, rate }

function Order() {
const [cart, setcart] = useState([])
    useEffect(() => {
        
       db.collection('order').doc('pi_1HQVBDBl9xvRzSgFTwiSWOVC').onSnapshot((snap)=>{
           setcart(snap.data().cart)
       })
    }, [])
    return (
        <div>
        {cart.map((cart)=>{
            return  <CheckoutItem image={cart.image} price={cart.price} title={cart.title} rate={cart.rate} btn />
        }
        )}
           
        </div>
    )
}

export default Order
