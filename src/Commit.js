import React from "react";
import './Commit.css'
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useStateValue } from "./StateProvider";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Messagebody from "./Messagebody";

var socket = io.connect("http://localhost:5000");
// let classes=makeStyles();
function Commit() {
  const [state, setstate] = useState(null);
  const [data, setdata] = useState(null);
  const [serverdata, setserverdata] = useState([]);
  const [{cart,user}, dispatch] = useStateValue();
  useEffect(() => {
    setstate('');
  axios.get('http://localhost:5000/Commit').then(data=>{console.log("messaft ",data.data)
data.data.map(item=>setserverdata((oldstate)=>[...oldstate,item]))

}).catch(e=>console.log(e))
  }, [serverdata]);

// console.log("final ",serverdata)


  socket.on('message',(message)=>{
   console.log("message type", message)
    setserverdata([...serverdata,message])
    // console.log("client",message.message)
    // console.log("SERverdat::",serverdata)
})

  function get_data(e) {
    e.preventDefault();
    e.target.previousElementSibling.value=""
   document.getElementsByClassName('data')
    socket.emit('message',{ message: data, user: user ? user:"Anonymous" })
   
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
     { serverdata.map((item,index)=>
      { if(index<10)
         return <Messagebody user={item.User} message={item.Message}/>})
       }
      
    </div>
  );
}

export default Commit;
 