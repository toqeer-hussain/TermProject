import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {initialState} from './reducer'
function Forget() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Error, setError] = useState('');
  const [Info, setInfo] = useState(false);
  const SendData = (e) => {
    e.preventDefault()
    axios
      .post(`${initialState.baseUrl}/forget`, { Email },{headers:{
        "Access-Control-Allow-Origin": "*"
      }})
      .then((response) => {
        console.log("Invalid Email", response.data);
        if (response.data) {
            setInfo(response.data)
        } else {
          setError("Invalid Email");
        }
      })
      .catch((e) => console.log("Error", e));
  };

  return (
    <div>
    <h2 style={{marginTop:"10px",borderTop:"3px solid #f0c14b",borderBottom:"3px solid #f0c14b",marginLeft:"80px",marginRight:"80px",padding:"15px",backgroundColor:"black",color:"white"}}>Recover Your Account</h2>
      <form>
        {Info ? (
          <h5 className="text-success">
            Go to Your provided Email to Reset your Password
          </h5>
        ) : (
          <div>
            <h3 className="text-danger">{Error}</h3>
            <div className="form-group col-6" style={{
                border:"1px solid teal",
                padding:"40px",
                boxShadow:" 0px 0px 0px 20px teal",
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '500px',
                transform:"translate(-50%,-50%)"}}>
              <label for="exampleInputEmail1" style={{
                fontSize:"25px"
              }}>Email Address</label>
              <input
                type="email"
                className="form-control inp"
                id="exampleInputEmail1"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
                <button
                style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}
              type="submit"
              onClick={SendData}
              className="btn btn-primary"
            >
              Submit
            </button>
            </div>
          
          </div>
        )}
      </form>
    </div>
  );
}

export default Forget;
