import React,{useEffect} from "react";
import "./login.css";
import { Route,Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Login({ title }) {
  const history = useHistory();
  const [{ cart,user }, dispatch] = useStateValue();
  const [usererror, setusererror] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const [passworderror, setpassworderror] = useState(false);
  const [showhide, setshowhide] = useState(true);
  const [formsubmit, setformsubmit] = useState(false);
  const [server, setserver] = useState(false)
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [UserName, setUserName] = useState("");

  let userNamepattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
  let emailpattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



useEffect(() => {
  let b;
}, [Email,password,UserName])


  const register = (e) => {
    e.preventDefault();
    if (!UserName || !password || !Email) {
      setformsubmit(true);
   
    } else {
      setformsubmit(false);
    }

    if (
      userNamepattern.test(UserName) &&
      emailpattern.test(Email) &&
      passwordpattern.test(password)
    ) {
      setusererror(false);
      setemailerror(false);
      setpassworderror(false);
      console.log(UserName, Email, password);
      axios
        .post("http://localhost:5000/registration", {
          Email,
          password,
          UserName,
        })
        .then((response) => {
          console.log("Registor User", response.data);
  if(response.data.Email=="Email Already exist!")
  {
setserver(true)
  }else{
          setEmail("");
          setpassword("");
          setUserName("");
  }  
          history.push("/Login");
        })
        .catch((e) => console.log("Error", e));
    } else {
      ValueValidate();
      console.log("register");
    }
  };
  const ValueValidate = () => {
    console.log("Called")
    if (!userNamepattern.test(UserName) || !UserName) {
      setusererror(true);
    } else {
      setusererror(false);
    }
    if (!emailpattern.test(Email) || !Email) {
      setemailerror(true);
    } else {
      setemailerror(false);
    }
    if (!passwordpattern.test(password) || !password) {
      setpassworderror(true);
    } else {
      setpassworderror(false);
    }
  };

  const login = (e) => {
    setserver(false)
    e.preventDefault();
    if (!UserName && !Email) {
      setformsubmit(true);
    } else {
      setformsubmit(false);
    }

    if (
      
      emailpattern.test(Email) 
    ) {
      console.log("Enter into login")
      setusererror(false);
      setemailerror(false);
      setpassworderror(false);
      axios
        .post("http://localhost:5000/login", {
          Email,
          password,
        })
        .then((response) => {
          console.log("freom dknfsd",response.data)
          if(response.data.invalid=="Invalid Credential")
          {
        setserver(true)
          }else{      console.log("freom dknfsd",response.data)
                  setEmail("");
                  setpassword("");
                  setUserName("");
          

          setEmail("");
          setpassword("");
          axios.defaults.headers.common['Authorization-token'] = response.data.token;
          dispatch({
            type: "SET_USER",
            user: response.data.user.UserName,
          });

          history.goBack();}
        })
        .catch((e) => console.log("Error", e));

      console.log(Email, password);
    } else {
      ValueValidate();
    }
    
  };
const toggle = () => {
      if (!showhide) {
        setshowhide(true);
      } else {
        setshowhide(false);
      }
    };
  return (
    <div className="big">
      <div className="Container">
        <h3>{title}</h3>
       { title == "Login" && server && <h4 style={{ display: "block", color: "#f44336" }}>Invalid Credential</h4>}
       {title == "Register" && server && <h4 style={{ display: "block", color: "#f44336" }}>Email Already exist!</h4>}
        <form>
          {title == "Register" && (
            <div>
              <h4>Username</h4>
              <input
                type="text"
                value={UserName}
                onChange={(e) => {setUserName(e.target.value);ValueValidate()}}
                className="inp"
              />
              {!UserName && formsubmit && (
                <p style={{ display: "block", color: "#f44336" }}>
                  Please Enter your Username
                </p>
              )}
              <ul
                style={
                  usererror
                    ? { display: "block", color: "#f44336" }
                    : { display: "none" }
                }
              >
                <li>Username length must be greater than 6</li>
                <li>
                  UserName Contain atleast one uppercase,one lowercase ,one
                  number
                </li>
              </ul>
            </div>
          )}
          <h4>E-mail</h4>
          <input
            type="Email"
            value={Email}
            onChange={(e) => {setEmail(e.target.value);ValueValidate()}}
            className="inp"
          />
          {!Email && formsubmit && (
            <p style={{ display: "block", color: "#f44336" }}>
              Please Enter your Email
            </p>
          )}
          <p
            style={
              emailerror
                ? { display: "block", color: "#f44336" }
                : { display: "none" }
            }
          >
            You have entered an invalid email address!
          </p>
          <h4>Password</h4>
          <div style={{ width: "100%" }}>
            <input
               type={showhide?"password":"text"}
              style={{ width: "83%" }}
              value={password}
              onChange={(e) =>{ setpassword(e.target.value);ValueValidate()}}
              className="inp"
            />

            <small
              onClick={toggle}
              style={{
                border: "1px solid teal",
                borderLeft: "none",
                padding: "8px 6px",
                paddingTop: "9px",
                cursor:"pointer"
              }}
            >
             {showhide ? <VisibilityIcon style={{ position: "relative ", top: "6px " }} />:
            <VisibilityOffIcon  style={{ position: "relative ", top: "6px " }}/>}
            </small>
          </div>
          {!password && formsubmit && (
            <p style={{ display: "block", color: "#f44336" }}>
              Please Enter your Password
            </p>
          )}
          {title !== "Login" && (
            <p
              style={
                passworderror
                  ? { display: "block", color: "#f44336" }
                  : { display: "none" }
              }
            >
              Minimum eight characters, at least one uppercase letter, one
              lowercase letter, one number and one special character
            </p>
          )}
        
          <hr className="divider" />

          <button
            className="btn"
            type="submit"
            onClick={title == "Login" ? login : register}
          >
            {title}
          </button>
        </form>
        
        <Link to="forget">
        {title=="Login" && <a style={{textDecoration:"none",color:"teal",fontWeight:"600"}} href="">forget Password?</a>}</Link>
      </div>
    </div>
  );
}
export default Login;
