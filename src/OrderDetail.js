import React from 'react'
import './OrderDetail.css'
function OrderDetail({price,index,title,total,Orderid,quantity}) {

    console.log(price,index,title,total,Orderid,quantity)
    return (
       
       <div>
       <h3 style={{width:"80%",marginRight:"auto",marginLeft:"auto",marginTop:"10px",marginBottom:"10px"}}>OrderID :{Orderid}</h3>
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
  <tbody>
    <tr className="row2">
      <th s>{index}</th>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      
    </tr>
   
  </tbody>
</table>   

<div style={{width:"80%",marginRight:"auto",marginLeft:"auto",marginTop:"25px",marginBottom:"10px",}}>
<table style={{width:"100%"}}>
<th>
<h4 style={{float:"right",
marginRight: "90px"}}><small style={{
    marginRight: "195px",
    fontSize: "20px"
}}>Total:</small>      ${total}</h4></th></table>
</div>
</div>
            )
}

export default OrderDetail
