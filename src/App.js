import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import Nav from "./Nav";
import Product from "./Product";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProceedToCheckout from "./ProceedToCheckout";
import Order from "./Order";
import Login from "./Login";
// import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Forget from "./Forget";
import PasswordReset from './PasswordReset';

const promise = loadStripe(
  "pk_test_51HQ9l9Bl9xvRzSgF4XvG4gBXqc3CVKZInopwgCbk65afFSNC2PFY0jQEAhrheGkFJ7U9OeFABi1OnSbgjHfjddWQ00TX0dcQWl"
);
function App() {
  const [{ cart,user }, dispatch] = useStateValue();
  const history = useHistory();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch({
  //         type: "SET_USER",
  //         user: user,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  console.log("Cart length", cart.length);
  return (
    <Router>
      <div className="App ">
        <Switch>
          <Route exact path="/checkout">
            {cart.length > 0 && user ? <Checkout /> : <Redirect to="/" />}
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
              <Login title="Register" />
            </div>
          </Route>
          <Route exact path="/order">
            <Nav />
            <Order />
          </Route>
          <Route path="/proceed">
            <Nav />
            {cart.length > 0 ?   <Elements stripe={promise}>
              <ProceedToCheckout />
            </Elements> : <Redirect to="/" />}
          
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
                id="1"
                key={1}
                title="The most popular loud speaker: (3 Generation ) with noise cancelation "
                image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                rate={4.5}
                price={50.12}
              />

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
              />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
