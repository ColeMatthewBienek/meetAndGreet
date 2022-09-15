import React, { useState, useEffect } from 'react';
import './loginStyle.css';

const FormInput = (props) => {
  return(
    <div className="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

const FormButton = (props) => {
  return(
    <div id="button" className="row">
      <button>{props.title}</button>
    </div>
  )
}

function LoginForm (props) {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  let handleSubmit = (event) => {

  };

function handleChange(event) {
  setUserName(event.target.value)
  console.log('Here');
}

  return (

      <form onSubmit={handleSubmit}>
      <FormInput value={userName} description="UserName" placeholder="Enter Username" type="text" onChange={handleChange}/>
      <FormInput value={password} description="password" placeholder="Enter password" type="text" onChange={handleChange}/>
      <FormButton title="log in" onClick={handleSubmit}/>
      </form>


  )
}

export default LoginForm;