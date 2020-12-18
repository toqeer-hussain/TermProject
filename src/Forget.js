import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Forget() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Error, setError] = useState('');
  const [Info, setInfo] = useState(false);
  const SendData = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/forget", { Email })
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
      <form>
        {Info ? (
          <h5 className="text-success">
            Go to Your provided Email to Reset your Password
          </h5>
        ) : (
          <div>
            <h3 className="text-danger">{Error}</h3>
            <div className="form-group col-6">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control inp"
                id="exampleInputEmail1"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button
              type="submit"
              onClick={SendData}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Forget;
