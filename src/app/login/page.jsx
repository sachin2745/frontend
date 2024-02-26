import React from 'react'
import classes from './login.module.css'
const Login = () => {
  return (
    <div><h1 className='text-center fw-bold text-info bg-warning'>Login Page</h1>
    <button className={classes.myBtn}>Submit</button>   
    <button className='my-btn'>Login</button> 
    </div>
  )
}

export default Login