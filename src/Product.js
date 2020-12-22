import React, { useState, useEffect } from "react";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from 'react-router-dom';
function Product({ id, title, image, rate, price }) {
  const history=useHistory()
  const [star, setstar] = useState([]);
  const [state, dispatch] = useStateValue();
  const handle = () => {
    dispatch({
      cart: { id: id, title: title, image: image, rate: rate, price: price ,update:true },
      type: "ITEM_ADD",
    });
  };
  useEffect(() => {
    for (let i = 0; i < Math.floor(rate); i++) {
      
      setstar((oldstate)=>([...oldstate,<StarIcon />]));
    }
    if (rate % 1 === 0.5) {
      setstar((oldstate)=>([...oldstate,<StarHalfIcon />]));
    }
  }, []);

const Detail=()=>{
  history.push(`/detail/${id}`)
}

  return (
    <div className="Product" style={{cursor:"pointer"}} onClick={Detail}>
      <div className="product_info">
        <h2>{title}</h2>
        <h4 className="Star">{star}</h4>
        <h2 className="price">
          {price}
          <small>$</small>
        </h2>
      </div>
      <img src={image} />
      <button onClick={handle}> Add to cart</button>
    </div>
  );
}

export default Product;
