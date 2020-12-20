import React from 'react'
import './Commit.css'
import Avatar from '@material-ui/core/Avatar';
function Messagebody() {
    return (
        <div style={{marginBottom:"25px",marginLeft:"5px"}}>
        <div  className="outerbody">
        <div>
          <Avatar alt="Remy Sharp" >OP </Avatar>
          </div> 
          <div className="userbody">
          <div><h4>Toqeer Hussain</h4>
         <h5 style={{marginLeft:"8px"}}>🌟 🌟 🌟 🌟</h5></div>
          <div>
           <p style={{marginRight:"10px"}}>12:55 pm</p></div>
          </div>
        
      </div>  <div style={{textAlign:"justify"}}> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
        </div>
    )
}

export default Messagebody
