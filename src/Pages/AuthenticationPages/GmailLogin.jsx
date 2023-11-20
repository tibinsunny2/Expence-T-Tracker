import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import M from "materialize-css";
import "./GmailLogin.css";
import GoogleIcon from "../../Components/Images/Navbar/googleloginicon.png";
import { setUserDetails } from "../../Store/tackerReducer";

function GmailLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const PostData = () => {
    // we need to valclassNameate the email using ajax javascript
    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        email
      )
    ) {
      alert("invalid email");
    }
    fetch("	login/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.refresh && data.access) {
          const Access = data.access;
          const Refresh = data.refresh;
          localStorage.setItem("refreshToken", Refresh);
          localStorage.setItem("accessToken", Access);
          dispatch(
            setUserDetails({
              Access,
              Refresh,
            })
          );
          alert("Welcome");
          navigate("/home");
          window.location.reload();
        } else {
          alert(data.detail);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    const ToggleToken = true;
    localStorage.setItem("ToggleToken", ToggleToken);
    window.location.reload();
  };
  return (
    <div class="container">
      <div className="secondContainer">
        <div class="wrapper">
          <div className="HearderContainer">
            <img src={GoogleIcon} />
          </div>
          <div className="hedding1">
            <h4>Sign in</h4>
            <h6>to continue to MoneyTracker</h6>
          </div>
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
            <button onClick={() => PostData()}>Sign in</button>
          </div>
          <h5>
            <Link
              to="/signup"
              onClick={handleClick}
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              Already have account?? SignUp
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default GmailLogin;
