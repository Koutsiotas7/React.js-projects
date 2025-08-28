import React, { useState } from 'react';
import "./LoginSignup.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

 const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  function handleSubmit()
  {
    if (forgotPasswordMode) {
      if (!email || !password || !confirmPassword) {
        alert("Please fill all fields!");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Reset password "successful"
      setLoggedInUser(email);
      setForgotPasswordMode(false);
      setEmail(""); setPassword(""); setConfirmPassword("");
      return;
    }

    if(action === "Sign Up")
    {
        if(!name || !email || !password){
            alert("You must fill every field to Sign Up!");
            return;
        }

        alert(`Sign Up was a success! Welcome ${name}`);
        setLoggedInUser(name);
        setName(""); setEmail(""); setPassword("");
    }
    else
    {
        if(!email || !password)
        {
            alert("You must give the email and the password to login!!");
            return;
        }

        alert(`Login is a success! Welcome back ${email}`);
        setLoggedInUser(email);
        setEmail("");
        setPassword("");
    }
  }

  if(loggedInUser)
  {
    return (
        <div className='container'>
            <h1>Welcome back {loggedInUser}</h1>
        </div>
    )
  }

  if (forgotPasswordMode) {
    return (
      <div className='container'>
        <div className='header'>
          <div className='text'>Reset Password</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <img src={email_icon} alt='' />
            <input
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt='' />
            <input
              type='password'
              placeholder='New Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt='' />
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className='submit' onClick={handleSubmit}>
          Reset Password
        </div>
        <div
          style={{ marginTop: '20px', color: 'blue', cursor: 'pointer', textAlign: 'center' }}
          onClick={() => setForgotPasswordMode(false)}
        >
          Back to Login
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action ==="Login"?<div></div>:
            <div className='input'>
                <img src={user_icon} alt='' />
                <input type='text' placeholder='Name'
                value={name} onChange={(e) => setName(e.target.value)}
                />
            </div>
            }
            <div className='input'>
                <img src={email_icon} alt='' />
                <input type='email' placeholder='Email Id'
                value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='input'>
                <img src={password_icon} alt='' />
                <input type='password' placeholder='Password'
                value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>
        {action ==="Sign Up" ? <div></div> :
        <div className="forgot-password">Lost Password? Click  
        <span 
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            onClick={() => setForgotPasswordMode(true)}> 
            <u> Here!</u>
            </span>
        </div>
        }
<div className="submit-container">
  {/* Tab buttons - switch between Sign Up / Login */}
  <div
    className={action==="Login"? "tab gray" : "tab active"}
    onClick={() => { setAction("Sign Up"); setName(""); setEmail(""); setPassword(""); }}
  >
    Sign Up
  </div>
  <div
    className={action==="Sign Up"? "tab gray" : "tab active"}
    onClick={() => { setAction("Login"); setName(""); setEmail(""); setPassword(""); }}
  >
    Login
  </div>
</div>

{/* Main submit button */}
<div className="submit" onClick={handleSubmit}>
  {action === "Sign Up" ? "Sign Up Now" : "Login Now"}
</div>
    </div>
  )
}

export default LoginSignup;

