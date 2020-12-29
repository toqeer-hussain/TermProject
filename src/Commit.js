import React from "react";
import './Commit.css'
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useStateValue } from "./StateProvider";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Messagebody from "./Messagebody";
import {initialState} from './reducer'
var socket = io.connect(`${initialState.baseUrl}`);
// let classes=makeStyles();
function Commit() {
  const [state, setstate] = useState(null);
  const [data, setdata] = useState(null);
  const [msg, setmsg] = useState([])
  const [serverdata, setserverdata] = useState([]);
  const [{cart,user,baseUrl}, dispatch] = useStateValue();
  useEffect(() => {
    setstate('');
  axios.get(`${baseUrl}/Commit`).then(data=>{console.log("messaft ",data.data)
data.data.map(item=>setmsg((oldstate)=>[...oldstate,item]))

}).catch(e=>console.log(e))
  }, []);

// console.log("final ",serverdata)


  socket.once('result',({message})=>{
   console.log("message type", message)
    setmsg([...msg,message])
    // console.log("client",message.message)
    console.log("SERverdat::",msg)
})

  function get_data(e) {
    e.preventDefault();
    e.target.previousElementSibling.value=""
   document.getElementsByClassName('data')
    socket.emit('message',{ Message: data, User: user ? user:"Anonymous" })
   
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
     { msg?.reverse().map((item,index)=>
     <Messagebody user={item.User} message={item.Message}/>)
       }
       <hr></hr>
      
    </div>
  );
}

export default Commit;
 