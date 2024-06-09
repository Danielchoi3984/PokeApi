import React, { useState } from 'react'
import './LoginSignup.css'

function LoginSignup  ({onLogin,message}) {
        const [email,setMail]= useState("")
        const [password,setPassword]= useState("")
        const [action,setAction]=useState("Sign Up")

  return (
    <div className='container'>
        {action === "Login"? <div className='header'> 
        <div className='text'>Login</div>
        </div> :
        <div className='header'> 
        <div className='text' >SignUp</div>
        </div>
        }
        <div className='inputs'>
        {action === "Login"?<div></div>: 
        <div className='input'>
            <input placeholder='Name' type='text' />
        </div>}
        <div className='input'>
            <input placeholder="Email" type='email' value={email} onChange={(e)=>setMail(e.target.value)}/>
        </div>  
        <div className='input'>
            <input placeholder='Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        </div>
        <div className='submit-container'>
            <div className={action==="Login"?'submit gray':"submit"} onClick={(e)=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?'submit gray':"submit"} onClick={(e)=>{action==="Sign Up" ? setAction("Login"): onLogin(email,password)}}>Login</div>
            <p>{message}</p>
        </div>
    </div>
  )
}
export default LoginSignup
