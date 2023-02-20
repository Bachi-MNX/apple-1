import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
   
    <div className="wrapper">
    <div className="inner">
      <p className="text"><strong>Login</strong></p>
      <p className="username">Username</p>
      <div className="second-wrapper">
      <i class="bi bi-person"></i>
      <input className="type-your" type="text" placeholder="Type Your username"/>
      </div>
      <p className="pass">password</p>
      <div className="pass-wrapper">
      <i class="bi bi-key"></i>
      <input className="password" type="password" placeholder="Type Your password"/>
      </div>
      <p className="forgot-pass">Forgot password?</p>
      <div className="login">
        <button className="login-button">LOG IN</button>
      </div>
      <p className="sign-up">Or Sign Up Using</p>
      <div className="media">
      <Link to="/registration"><i class="bi bi-facebook"></i></Link>
      <Link to="/registration"><i class="bi bi-twitter"></i></Link>
      <Link to="/registration"><i class="bi bi-google"></i></Link>
      </div>
    </div>
  </div>
  )
}

export default Login