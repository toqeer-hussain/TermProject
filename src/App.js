import React, { useEffect,useState } from "react";
import makeproduct from './MakeProduct'
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import axios from 'axios';
import Nav from "./Nav";
import Product from "./Product";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProceedToCheckout from "./ProceedToCheckout";
import Order from "./Order";
import Login from "./Login";

import { useStateValue } from "./StateProvider";
import Forget from "./Forget";
import PasswordReset from './PasswordReset';
import LayoutDetail from './LayoutDetail';

const promise = loadStripe(
  "pk_test_51HQ9l9Bl9xvRzSgF4XvG4gBXqc3CVKZInopwgCbk65afFSNC2PFY0jQEAhrheGkFJ7U9OeFABi1OnSbgjHfjddWQ00TX0dcQWl"
);
function App() {
  const [{ cart,user,baseUrl }, dispatch] = useStateValue();
  const [product, setproduct] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`${baseUrl}/product`).then((d)=>
    { 
      // console.log("from server",d.data[0].Image[0].imgkey)
     
      d.data.map(item=>{
        setproduct((oldstate)=>([...oldstate,item]))
      })
    }
      ) .catch(e=>console.log(e))
  }, []);
  // console.log("Image",product)
  // console.log("Cart length", cart.length);
  return (
    <Router>
      <div className="App ">
        <Switch>
          <Route exact path="/checkout">
          <Nav/>
            {cart.length > 0  ? <Checkout /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/login">
          <div className="Nav_left2">
          <Link style={{textDecoration:"none"}} to="/">
            <h3 className="img2">E-Com</h3>
          </Link>
        </div>
            <div className="login_set">
            
              <Login title="Login"  />
             { 
              !user && <Login title="Register" />}
            </div>
          </Route>

          <Route exact path="/order">{
            user ? <div> <Nav />  <Order /></div>:<Redirect to="/login" />}
          </Route>
          <Route path="/detail/:productid">
          <Nav />
          <LayoutDetail />
          </Route>
          <Route path="/proceed">
            <Nav />
            {cart.length > 0 && user ?   <Elements stripe={promise}>
              <ProceedToCheckout />
            </Elements> : <Redirect to="/login" />}
          
          </Route>

          <Route exact path="/forget">
          <Forget />
          </Route>
          <Route exact path="/newpass/:token">
          <PasswordReset />
          </Route>
          <Route path="/">
            <Nav />      
      
             

             <div style={{marginTop:"60px"}}>
              <div className="product_row">
           { product.length>0 && makeproduct(0,1,product)}
           </div>
             
              <div className="product_row">
           { product.length>0 && makeproduct(2,5,product)}
           </div> <div className="product_row">
           { product.length>0 && makeproduct(1,2,product)}
           </div>
              <div className="product_row">
           { product.length>0 && makeproduct(5,7,product)}
           </div>
              <div className="product_row">
           { product.length>0 && makeproduct(7,8,product)}
           </div>
              <div className="product_row">
           { product.length>0 && makeproduct(8,10,product)}
           </div>
              <div className="product_row">
           { product.length>0 && makeproduct(10,13,product)}
           </div>
              <div className="product_row">
           { product.length>0 && makeproduct(13,14,product)}
           </div>
           
              <div className="product_row">
           { product.length>0 && makeproduct(14,16,product)}
           </div></div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


 
 
 