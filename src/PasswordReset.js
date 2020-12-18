import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios'
function PasswordReset() {
  const history = useHistory();
  const location = useLocation();
  const [Password, setPassword] = useState("");
  const [message, setmessage] = useState('')

  console.log("url path",location.pathname)
  const SendData = (e) => {
    e.preventDefault()
    axios
      .post(`http://localhost:5000${location.pathname}`, { Password })
      .then((response) => {
        if (response.data) {
          console.log("Registor User", response.data);
          history.replace("/Login");
        }
        else{

        }
      })
      .catch((e) => console.log("Error", e));
  };
  return (
    <div>
      <div className="form-group">
        <label for="exampleInputPassword1"> Enter your New Password</label>
        <input
          type="password"
          className="form-control"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" onClick={SendData} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}

export default PasswordReset;
