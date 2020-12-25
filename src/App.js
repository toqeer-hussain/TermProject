import React, { useEffect,useState } from "react";
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
  const [{ cart,user }, dispatch] = useStateValue();
  const [product, setproduct] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:5000/product').then((d)=>
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
            {cart.length > 0  ? <Checkout /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/login">
          <div className="Nav_left2">
          <Link to="/">
            <img
              className="img2"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
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

            
            <div className="product_row animate__backInRight">
             

              <Product
                id="2"
                key={2}
                title="The new Generation phone for the growing Nation  "
                image="https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                rate={4}
                price={50.12}
              />
            </div>
            <div className="product_row">
              <Product
                id="3"
                key={3}
                title="The learn Startup The learn StartupThe learn StartupThe learn StartupThe learn Startup"
                image="https://images.pexels.com/photos/3013982/pexels-photo-3013982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                rate={3}
                price={25}
              />

              <Product
                id="4"
                key={4}
                title="Very suitable audio speaker for home for the tv and Desktop"
                image="https://images.pexels.com/photos/373638/pexels-photo-373638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                rate={4}
                price={5.52}
              />

              <Product
                id="5"
                key={5}
                title="Mike is very nice:dual audio NO:R57812 for verification"
                image="https://images.pexels.com/photos/347700/pexels-photo-347700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                rate={5}
                price={11.99}
              />
            </div>
            <div className="product_row">
              <Product
                id="6"
                key={6}
                title="Very beautiful lens for the beautiful people for the world "
                image="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                rate={3}
                price={65.12}
              />
              <Product
                id="7"
                key={7}
                title="The new Generation Camera for senmatic  shot "
                image="https://images.pexels.com/photos/1595243/pexels-photo-1595243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                rate={5}
                price={550.12}
              /> {
                
              product?.map((item,index)=>
                <Product
              id={item._id}
              key={item._id}
              title={item.ProductName}
              image={`http://localhost:5000/${item.Image[0].imgkey}`}
              rate={item.Rating}
              price={item.Price}
            />)}
            </div>
           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
