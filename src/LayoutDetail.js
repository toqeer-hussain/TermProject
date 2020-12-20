import React,{useState} from 'react'
import "./LayoutDetail.css"
import "./Carousal.css"

import Commit from './Commit';
function LayoutDetail() {

    const [openmodal, setopenmodal] = useState(false)
    const [value, setvalue] = useState(1)
    return (
      <div>
       <h2 style={{marginTop:"10px",borderTop:"3px solid #f0c14b",borderBottom:"3px solid #f0c14b",marginLeft:"80px",marginRight:"80px",padding:"15px",backgroundColor:"black",color:"white"}}>Product Detail</h2>
        
        <div className="row">
       
            <div className="col-4 outerdiv p-2 border border-black ">
          
            <div className="imgdiv">
         <img  className="imgSet" onClick={()=>
            {setopenmodal(true);setvalue(1)}}  src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"/> 
            </div>
             <div className="Secondlist">
            <img  className="imgSet2" onClick={()=>
                {setopenmodal(true);setvalue(2)}}  src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"/> 
            <img  className="imgSet2" onClick={()=>
                {setopenmodal(true);setvalue(3)}}  src="https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY"/> 
            <img  className="imgSet2" onClick={()=>
                {setopenmodal(true);setvalue(4)}} src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"/> 
            
            </div>
            </div>
            
           <div className="col-5 d-block border border-black">
           <h2 style={{marginTop:"5px",marginBottom:"5px"}}>Product Name</h2>
           <h3>Price $89</h3>
           <h5 >🌟 🌟 🌟 🌟</h5>
           
           <p style={{textAlign:"justify",marginTop:"5px"}}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
           </p><button className="btn detailbtn btn-success"  >
        Add To Cart
      </button>
           </div>
        </div>
        <div id="myModal" className="modal" style={openmodal?{display:"block"} :{display:"none"}}>
        <span className="close cursor" onClick={()=>setopenmodal(false)}>&times;</span>
        <div className="modal-content">
      
         { value=='1' && <div className="mySlides">
            <div className="numbertext">1 / 4</div>
            <img src={"./pexels-askar-abayev-6190993.jpg"} style={{width:"100%"}} />
          </div>}
      
         {  value=="2" && <div className="mySlides">
            <div className="numbertext">2 / 4</div>
            <img src={"./pexels-askar-abayev-6190993.jpg"} style={{width:"100%"}} />
          </div>}
      
         { value=="3" && <div className="mySlides">
            <div className="numbertext">3 / 4</div>
            <img src={"https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY"} style={{width:"100%"}} />
          </div>}
      
          {value=="4" &&<div className="mySlides">
            <div className="numbertext">4 / 4</div>
            <img src={"https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"} style={{width:"100%"}} />
          </div>}
      
          <a className="prev" onClick={()=>{value=="1" ?setvalue(4):setvalue(parseInt(value)-1)}}>&#10094;</a>
          <a className="next" onClick={()=>{value=="4" ? setvalue(1):setvalue(parseInt(value)+1)}}>&#10095;</a>
        </div>
      
        </div>
        <h2 style={{marginTop:"15px",borderTop:"3px solid #f0c14b",borderBottom:"3px solid #f0c14b",marginLeft:"80px",marginRight:"80px",padding:"10px",backgroundColor:"black",color:"white"}}>Customer's Review</h2>
        <Commit />
        </div>
    )
}

export default LayoutDetail
