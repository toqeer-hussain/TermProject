import React from "react";
import "./Subtotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  const getCartTotal = () => {
    let sum = 0;
     cart?.map((item) => (sum = sum + (item?.price*item.quantity)));
    return sum;
  };
  return (
    <div className="Subtotal">
      <Currencyformat
        renderText={(value) => (
          <div className="subtotal_info">
            <p>Subtotal ({cart?.length} item) : <small>{value}</small></p>
            <small>
            <input type="checkbox" />
            This order contains some gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getCartTotal()}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Link to="/proceed" style={{display:'block',marginLeft:'auto',marginRight:'auto',width:"80%"}} >
      <button className="but" disabled={getCartTotal()>0 ? false :true}>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
