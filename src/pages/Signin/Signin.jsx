import React from "react";
import "./main.css"
const SignIn = () => {
  const ani=()=>{
    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');
    if (loginBtn){
    loginBtn.addEventListener('click', (e) => {
      let parent = e.target.parentNode.parentNode;
      Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if(element !== "slide-up") {
          parent.classList.add('slide-up')
        }else{
          signupBtn.parentNode.classList.add('slide-up')
          parent.classList.remove('slide-up')
        }
      });
    });
    }
    if(signupBtn){
    signupBtn.addEventListener('click', (e) => {
      let parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find((element) => {
        if(element !== "slide-up") {
          parent.classList.add('slide-up')
        }else{
          loginBtn.parentNode.parentNode.classList.add('slide-up')
          parent.classList.remove('slide-up')
        }
      });
    });}}
  return(
  <>
  <div >
    <div class="form-structor mx-auto my-5 shadow-lg">
      <div class="signup">
        <h2 class="form-title" id="signup" onClick={ani}><span>or</span>Sign up</h2>
        <div class="form-holder">
          <input type="text" class="input" placeholder="Name" />
          <input type="email" class="input" placeholder="Email" />
          <input type="password" class="input" placeholder="Password" />
        </div>
        <button class="submit-btn" >Sign up</button>
      </div>
      <div class="login slide-up">
        <div class="center">
          <h2 class="form-title" id="login" onClick={() => {ani()}}><span>or</span>Log in</h2>
          <div class="form-holder">
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button class="submit-btn" >Log in</button>
        </div>
      </div>
    </div>
    </div>
  </>);
}
export default SignIn;
