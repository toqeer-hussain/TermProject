import React from 'react'
import './order.css'
import OrderDetail from './OrderDetail'

import { useEffect  } from 'react';
import { useState } from 'react';
import CheckoutItem from './CheckoutItem';
import axios from 'axios'
import { useStateValue } from './StateProvider';
// { image, id, price, title, rate }

function Order() {
const [cart, setcart] = useState([])
const [order, setorder] = useState([])
const [orderid, setorderid] = useState([])
const [price, setprice] = useState([])
    useEffect(() =>{
        axios.get('  http://localhost:5000/order').then(d=>{
            console.log(d.data);
        console.log("order",d.data.order)
    d.data.order.map(item=>setorder((oldstate)=>[...oldstate,item]))

 d.data.order.map(item=>setorderid([...orderid,item._id]))
 d.data.order.map(item=>setprice([...price,item.Productlsit[0].total]))
//  console.log("price",price)
//  console.log("orderid",orderid)
    // setorderid([...orderid,newarry])
    //   let newvalue=order.filter(item=>item.total)

}).catch(e=>console.log(e))
    let newarry=[]
   
    //    console.log("orderid",orderid,ordervalue)
    //    setprice([...price,newvalue])
    //   console.log("price",newvalue)
    }, []) 
    // console.log(order[0]?.Productlsit[0]?.product)
//    console.log("orderid outside",orderid)
   console.log("order outside",order)
//    console.log("price out",price)
 
let ODLIST=[]


 
            
              

    return (
        <div>
        <h2 style={{marginTop:"10px",borderTop:"3px solid #f0c14b",borderBottom:"3px solid #f0c14b",marginLeft:"80px",marginRight:"80px",padding:"15px",backgroundColor:"black",color:"white"}}>Order Detail</h2>
       
        {order.map(item=>{
           return <div>
            <h3 style={{width:"80%",marginRight:"auto",marginLeft:"auto",marginTop:"10px",marginBottom:"10px"}}>OrderID :{item._id}</h3>
 <h4 style={{width:"80%",marginRight:"auto",marginLeft:"auto",marginTop:"10px",marginBottom:"10px"}}>Status :{item.status}</h4>    
 <h4  style={{width:"80%",marginRight:"auto",marginLeft:"auto",marginTop:"10px",marginBottom:"10px"}}>Placed Date :{item.Date}</h4> 
            <table className="tab1"> 
      <thead>
         <tr style={{border:"1px solid"}}>
           <th scope="col"></th>
           <th scope="col">ProductName</th>
           <th scope="col">Quantity</th>
           <th scope="col">Price</th>
           <th scope="col">SubTotal</th>
         </tr>
       </thead>
     { item.Productlsit[0]?.product.map((item,index)=><tbody>
         <tr className="row2">
           <th s>{index+1}</th>
           <td>{item.product.ProductName}</td>
           <td>{item.quantity}</td>
           <td>{item.price}</td>
           <td>{item.price*item.quantity}</td>
           
         </tr>
        
       </tbody>)}
     </table>   
     
     <div style={{width:"80%",marginRight:"auto",marginLeft:"auto",marginTop:"25px",marginBottom:"10px",}}>
     <table style={{width:"100%"}}>
     <th>
     <h4 style={{float:"right",
     marginRight: "90px"}}><small style={{
         marginRight: "195px",
         fontSize: "20px"
     }}>Total:</small>      ${item?.Productlsit[0]?.total}</h4></th></table>
     </div>
     </div> 
     
    })}
       </div>
        
    )

}
export default Order
