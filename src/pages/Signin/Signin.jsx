import React, { useState } from "react";
import axios from "axios";

import "./main.css";
const SignIn = () => {
  const ani = () => {
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");
    if (loginBtn) {
      loginBtn.addEventListener("click", (e) => {
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
          if (element !== "slide-up") {
            parent.classList.add("slide-up");
          } else {
            signupBtn.parentNode.classList.add("slide-up");
            parent.classList.remove("slide-up");
          }
        });
      });
    }
    if (signupBtn) {
      signupBtn.addEventListener("click", (e) => {
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
          if (element !== "slide-up") {
            parent.classList.add("slide-up");
          } else {
            loginBtn.parentNode.parentNode.classList.add("slide-up");
            parent.classList.remove("slide-up");
          }
        });
      });
    }
  };
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });
  const initialsignupData = Object.freeze({
    username: "",
    email: "",
    password: "",
  });
  // const [username, currusername] = useState("");
  // const [password, currpassword] = useState("");
  // const [email, curremail] = useState("");
  const [signinformData, updateFormData] = React.useState(initialFormData);
  const [signupformData, updatesignupData] = React.useState(initialsignupData);

  const handleChange = (e) => {
    updateFormData({
      ...signinformData,

      // Trimming any whitespace
      [e.target.username]: e.target.value.trim(),
    });
  };
  const handelsignup = (e) => {
    console.log("clicked",e.target)
    updatesignupData({
      ...signupformData
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signinformData);
    signindata(signinformData);
    // ... submit to API or something
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(signupformData);
    signupdata(signupformData);
    // ... submit to API or something
  };
  const signindata = async (val) => {
    const data = {
      username: "",
      password: "",
      email: "",
    };
    console.log(val);
    const win = await axios.post("http://localhost:5000/api/auth/signin", val, {
      headers: {
        // "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      },
    });
    console.log(win);
    // updatename(win.data.result);
    // console.log(win.data.result);
  };
  const signupdata = async (val) => {
    // const data = {
    //   name: "",
    //   password: "",
    //   email: "",
    // };
    console.log(val);
    const win = await axios.post(
      "http://localhost:5000/api/auth/register",
      val,
      {
        // http://localhost:3000/signin
        headers: {
          // "content-type": "*/*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods":
            "GET, PUT, POST, DELETE, HEAD, OPTIONS",
        },
      }
    );
    console.log(win);
    // updatename(win.data.result);
    // console.log(win.data.result);
  };
  return (
    <>
      <div>
        <div class="form-structor mx-auto my-5 shadow-lg">
          <div class="signup">
            <h2 class="form-title" id="signup" onClick={ani}>
              <span>or</span>Sign up
            </h2>
            <div class="form-holder">
              <input
                name="username"
                type="text"
                class="input"
                placeholder="Name"
                onChange={handelsignup}
              />
              <input
                name="email"
                type="email"
                class="input"
                placeholder="Email"
                onChange={handelsignup}
              />
              <input
                name="password"
                type="password"
                class="input"
                placeholder="Password"
                onChange={handelsignup}
              />
            </div>
            <button class="submit-btn" onClick={handleSignupSubmit}>
              Sign up
            </button>
          </div>
          <div class="login slide-up">
            <div class="center">
              <h2
                class="form-title"
                id="login"
                onClick={() => {
                  ani();
                }}
              >
                <span>or</span>Log in
              </h2>
              <div class="form-holder">
                <input
                  name="username"
                  type="text"
                  class="input"
                  placeholder="Name"
                  onChange={handleChange}
                />
                <input
                  name="password"
                  type="password"
                  class="input"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <button class="submit-btn" onClick={handleSubmit}>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
