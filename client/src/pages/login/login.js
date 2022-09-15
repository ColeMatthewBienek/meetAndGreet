import React from 'react';
import './style.css'
import LoginForm from './loginForm'

const FormHeader = (props) => {
  return (
  <h2 className="header-title">{props.title}</h2>
  )
}


function Login () {

  return (
    <div className='login-form'>
      <FormHeader title="Login"/>
      <LoginForm />


    </div>
  )
}

export default Login;