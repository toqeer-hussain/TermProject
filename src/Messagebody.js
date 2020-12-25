import React from 'react'
import './Commit.css'
import Avatar from '@material-ui/core/Avatar';
function Messagebody({user,message}) {
    return (
        <div style={{marginBottom:"25px",marginLeft:"5px"}}>
        <div  className="outerbody">
        <div>
          <Avatar alt="Remy Sharp" >{user} </Avatar>
          </div> 
          <div className="userbody">
          <div><h4>{user}</h4>
        </div>
          <div>
           <p style={{marginRight:"10px"}}>{}</p></div>
          </div>
        
      </div>  <div style={{textAlign:"justify"}}> {message}</div>
        </div>
    )
}

export default Messagebody
