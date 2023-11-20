import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import GoogleIcon from "../../Components/Images/Navbar/googleloginicon.png";
import M from "materialize-css";
import "./GmailSignUp.css";
function GmailSignUp() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const postData = () => {
    // we need to valclassNameate the email using ajax javascript
    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        email
      )
    ) {
      alert("complete the inout fileds as per the valid path");
      return;
    }
    fetch("	http://127.0.0.1:8000/register/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((res) => console.log(res.json()))
      .then((data) => {
        if (data.error) {
          M.toast("");
        } else {
          console.log(data)
          localStorage.clear('ToggleToken')
          window.location.reload()
         
               }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick=()=>{
    localStorage.clear('')
    window.location.reload();
  }

  return (
    <div class="container">
      <div className="secondContainer">
        <div class="wrapper">
          <div className="HearderContainer">
            <img src={GoogleIcon} />
          </div>
          <div className="hedding1">
            <h4>Sign up</h4>
            <h6>to continue to MoneyTracker</h6>
          </div>

          <input
            className="input1"
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="input1"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="input1"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="buttonContainer">
            <button class="button-signup" onClick={() => postData()}>
              Sign up
            </button>
          </div>
          <h5>
            <Link
              to="/login"
              onClick={handleClick}
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              Already have account?? Login
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default GmailSignUp;
