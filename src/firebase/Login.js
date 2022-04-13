import React from 'react';
import { useRef } from "react";
import { useState } from "react";
import {login, useAuth} from "./firebase";
import {useNavigate} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import './Login.css';
import Footer from '../components/Footer';
import Dash from './dashboard';
function Login() {
    
    // const [loading, setLoading] = useState(false);
    const currentUser = useAuth()

    const emailRef = useRef(); 
    const passwordRef = useRef();

    const navigate = useNavigate();

    async function handleLogin(){ //async because it is an api call
        try{
          // setLoading(true); //while user is getting registered disable signup button
          
          await login(emailRef.current.value,passwordRef.current.value); //sending email id and password as promise
          console.log("yay you are logged in")
          navigate("/dashboard");
        }
        catch(err){
          console.log(err)
          navigate("/dashboard");
        }
        // setLoading(false)
      }
  return (
    <div className='login-container'>
    
        <Form className='login-form'>
        <h1 className='font-weight-bold text-secondary'>Login Here!</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input ref={emailRef}type="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input ref={passwordRef} type="password" placeholder="Enter password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-black" onClick={handleLogin}>Log in</Button>
        </Form>
        
    </div>
  )
}

export default Login