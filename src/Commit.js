import React from "react";
import './Commit.css'
import { useEffect, useState } from "react";
import io from "socket.io-client";

import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Messagebody from "./Messagebody";

var socket = io.connect("http://localhost:5000/");
let classes=makeStyles();
function Commit() {
  const [state, setstate] = useState(null);
  const [data, setdata] = useState(null);
  const [serverdata, setserverdata] = useState([]);
  useEffect(() => {
    setstate('');
  axios.get('http://localhost:5000/').then(data=>console.log(data)).catch(e=>console.log(e))
    return () => {};
  }, []);
  socket.on('message',(message)=>{
   
    setserverdata([...serverdata,message.message])
    // console.log("client",message.message)
    // console.log("SERverdat::",serverdata)
})

  function get_data(e) {
    e.preventDefault();
    e.target.previousElementSibling.value=""
   document.getElementsByClassName('data')
    // console.log("intodata", data);
    // console.log("into user", state);
    socket.emit('message',{ message: data, user: state })
    if (data) {
    //   axios
    //     .post("http://localhost:5000/data", { message: data, user: state })
    //     .then((data) => {
    //       console.log("data from server", data.data);
    //       setserverdata(data.data);
    //     })
    //     .catch((e) => console.log(e));
        
    }
  }
  return (
    <div className="container">
    <h2>Review</h2>
      <textarea 
      placeholder="Enter your Review here..."
      className="msg"
        type="input"
      
        rows="10"
        cols="100"
        onChange={(e) => {setdata(e.target.value)}}
      >
        {data}
      </textarea>
      <button className="btn btn-success"  onClick={get_data}>
        Send
      </button>

      <Messagebody/>
      <Messagebody/>
      <Messagebody/>
    </div>
  );
}

export default Commit;
