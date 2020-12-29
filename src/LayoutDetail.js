import React,{useState} from 'react'
import "./LayoutDetail.css";
import "./Carousal.css";
import axios from 'axios';
import Commit from './Commit';
import { useEffect } from 'react';
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
  Redirect,
} from "react-router-dom";
function LayoutDetail({}) {
const {productid}=useParams();

const [product, setproduct] = useState(null);
    const [openmodal, setopenmodal] = useState(false)
    const [{cart,baseUrl}, dispatch] = useStateValue();
    const [value, setvalue] = useState(0)
    const [star, setstar] = useState([]);
  useEffect(() => {
    console.log("product id",productid)
    axios.get(`${baseUrl}/detail/${productid}`).then(
      d=>{console.log("data",d.data)
      
      setproduct(d.data)
      let rating=product?.Rating
      console.log("Rating",rating)
      if(star?.length==0){
      for (let i = 0; i < Math.floor(d?.data?.Rating); i++) {
      
        setstar((oldstate)=>([...oldstate,<StarIcon />]));
    }
    if (d?.data?.Rating % 1 === 0.5) {
      setstar((oldstate)=>([...oldstate,<StarHalfIcon />]));
    }}
      }
    ).catch(e=>console.log(e))

   

  }, [])
  const handle = () => {
    
    dispatch({
      cart: { id: product._id,productname:product.ProductName,quantity:1 ,price:product.Price,Image:`${baseUrl}/${product.Image[0].imgkey}`,Rating:product.Rating },
      type: "ITEM_ADD",
    });
  }


    return (
      <div>
       <h2 style={{marginTop:"10px",borderTop:"3px solid #f0c14b",borderBottom:"3px solid #f0c14b",marginLeft:"80px",marginRight:"80px",padding:"15px",backgroundColor:"black",color:"white"}}>Product Detail</h2>
        
        <div className="row">
       
            <div className="col-4 outerdiv p-2 border border-black ">
           
            <div className="imgdiv">
            <img  className="imgSet" onClick={()=>
            {setopenmodal(true);setvalue(0)}}  src={`${baseUrl}/${product?.Image[0].imgkey}`}/> 
            </div> <div className="Secondlist">
            {product?.Image.map((item,index)=>
              index!==0 ?
            
            <img  className="imgSet2" onClick={()=>
                {setopenmodal(true);setvalue(index)}}  src={`${baseUrl}/${ item.imgkey}`}/> 
          
            
            :"")}</div>
            </div>
            
           <div className="col-5 d-block border border-black">
           <h2 style={{marginTop:"5px",marginBottom:"5px"}}>{product?.ProductName}</h2>
           <h3>Price <small style={{fontSize:"20px"}}>$</small>{product?.Price}</h3>
           <h5 style={{ display:"flex",
            color: "#f0c14b"
         }} >{star
        }</h5>
           
           <p style={{textAlign:"justify",marginTop:"5px"}}>
           {product?.Description}
           </p><button className="btn detailbtn btn-success" onClick={handle} >
        Add To Cart
      </button>
           </div>
        </div>
        <div id="myModal" className="modal" style={openmodal?{display:"block"} :{display:"none"}}>
        <span className="close cursor" onClick={()=>setopenmodal(false)}>&times;</span>
        <div className="modal-content">
      
         {
          
          value=='0' && <div className="mySlides">
            <div className="numbertext">1 / 4</div>
            <img src={`${baseUrl}/${ product?.Image[0].imgkey}`} style={{width:"100%"}} />
          </div>}
      
         {  value=="1" && <div className="mySlides">
            <div className="numbertext">2 / 4</div>
            <img src={`${baseUrl}/${ product?.Image[1].imgkey}`} style={{width:"100%"}} />
          </div>}
      
         { value=="2" && <div className="mySlides">
            <div className="numbertext">3 / 4</div>
            <img src={`${baseUrl}/${ product?.Image[2].imgkey}`} style={{width:"100%"}} />
          </div>}
      
          {value=="3" &&<div className="mySlides">
            <div className="numbertext">4 / 4</div>
            <img src={`${baseUrl}/${ product?.Image[3].imgkey}`} style={{width:"100%"}} />
          </div>}
      
          <a className="prev" onClick={()=>{value=="0" ?setvalue(3):setvalue(parseInt(value)-1)}}>&#10094;</a>
          <a className="next" onClick={()=>{value=="3" ? setvalue(0):setvalue(parseInt(value)+1)}}>&#10095;</a>
        </div>
      
        </div>
        <h2 style={{marginTop:"15px",borderTop:"3px solid #f0c14b",borderBottom:"3px solid #f0c14b",marginLeft:"80px",marginRight:"80px",padding:"10px",backgroundColor:"black",color:"white"}}>Customer's Review</h2>
        <Commit />
        </div>
    )
}

export default LayoutDetail
// <img  className="imgSet2" onClick={()=>
//   {setopenmodal(true);setvalue(3)}}  src="https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY"/> 
// <img  className="imgSet2" onClick={()=>
//   {setopenmodal(true);setvalue(4)}} src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"/> 