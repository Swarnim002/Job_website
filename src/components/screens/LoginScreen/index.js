import React from "react";
import "./styles.css";
import "../LoginScreen/styles.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavbarView } from "../../ui/Navbar";




const LoginScreen = () => {


const navigate = useNavigate();  
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');



const handleSubmit = (e) => {
  e.preventDefault();

  const data = {
    email: email,
    password: password
  }
  axios
  .post('https://jobs-api.squareboat.info/api/v1/auth/login', 
  data
  )
  .then( res => {
    localStorage.setItem("token", res.data.data.token)
    navigate('/home')
  })
  .catch( err => console.log(err))
}

  return (
    <div className="loginContainer">
      <NavbarView />
      <div className="formView">
      <form onSubmit={handleSubmit} className="loginForm">
        <h3>Log In</h3>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          type="text" 
          name="email" 
          placeholder="Enter your email"
          id="email"
          autoComplete="off" />
         

        </div>
        <div className="passDiv ">
          <label htmlFor="password">Password</label>
          <input 
          
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          type="text" 
          name="password" 
          placeholder="Enter your password"
          id="password"
          autoComplete="off" />
        </div>
        <button type="submit" className="blueBtn alignCenter">
          Login
        </button>
      </form>
      </div>
    </div>
  );
};

export default LoginScreen;
