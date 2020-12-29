import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axios from 'axios'
import {initialState} from './reducer'
function PasswordReset() {
  const history = useHistory();
  const location = useLocation();
  const [Password, setPassword] = useState("");
  const [message, setmessage] = useState('')
  const [showhide, setshowhide] = useState(true);



 

  console.log("url path",location.pathname)
  const SendData = (e) => {
    e.preventDefault()
    axios
      .post(`${initialState.baseUrl}${location.pathname}`, { Password })
      .then((response) => {
        if (response.data) {
          console.log(" User new Password", response.data);
          history.replace("/login");
        }
        else{

        }
      })
      .catch((e) => console.log("Error", e));
  };

  const toggle = () => {
    if (!showhide) {
      setshowhide(true);
    } else {
      setshowhide(false);
    }
  };
  return (
    <div>
    <h2 style={{marginTop:"10px",borderTop:"3px solid #f0c14b",borderBottom:"3px solid #f0c14b",marginLeft:"80px",marginRight:"80px",padding:"15px",backgroundColor:"black",color:"white"}}>New Password</h2>
      <div className="form-group" style={{
        border:"1px solid teal",
        padding:"40px",
        boxShadow:" 0px 0px 0px 20px teal",
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '500px',
        transform:"translate(-50%,-50%)"}}>
        <label for="exampleInputPassword1" style={{
          fontSize:"20px",marginBottom:"15px"
        }}> Enter your New Password</label>
        <input
        
        style={{marginTop:"15px",width: "83%"}}
        type={showhide?"password":"text"}
          className="form-control inp"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Password"
        />  
        
        <small
        onClick={toggle}
        style={{
          border: "1px solid teal",
          borderLeft: "none",
          padding: "9px 6px",
          paddingTop: "9px",
          cursor:"pointer",
          backgroundColor:"white"
        }}
      >
       {showhide ? <VisibilityIcon style={{ position: "relative ", top: "6px " }} />:
      <VisibilityOffIcon  style={{ position: "relative ", top: "6px " }}/>}
      </small>
        
        
        <button type="submit" 
        style={{width:"86%",marginLeft:"19px",marginRight:"auto"}} onClick={SendData} className="btn btn-primary">
        Submit
      </button>
      </div>
    
    </div>
  );
}

export default PasswordReset;
