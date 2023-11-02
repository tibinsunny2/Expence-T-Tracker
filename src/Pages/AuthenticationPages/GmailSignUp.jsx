import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from '../../Components/Images/Navbar/googleloginicon.png'
import M from "materialize-css";
import "./GmailSignUp.css";
function GmailSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const postData = () => {
    // we need to valclassNameate the email using ajax javascript
    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        email
      )
    ) {
      M.toast({ html: "inval email", classes: "#f44336 red" });
      return;
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
     const Da=M.toast({ html: data.error, classes: "#f44336 red" });
        } else {
          M.toast({ html: data.message, classes: "#00e676 green accent-3" });
          navigate("/Login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="container">
      <div className="secondContainer">
        <div class="wrapper">
          <div className="HearderContainer">
            <img src={GoogleIcon} />
          </div>
          <divn className="hedding1">
            <h4>Sign up</h4>
            <h6>to continue to Uber</h6>
          </divn>

          <input
          className="input1"
            type="text"
            placeholder="name"
            value={name}
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
            <button onClick={() => postData()}>Sign up</button>
          </div>
          <h5>
            <Link
              to="/login"
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
