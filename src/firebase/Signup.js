import { useRef } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {signup, login, useAuth, logout} from "./firebase";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import './Login.css';

function Signup() {

  const [loading, setLoading] = useState(false); //by default signup button will be enabled no loading
  const currentUser = useAuth() //get the current user details
  const emailRef = useRef(); //to get user email id 
  const passwordRef = useRef(); // to get user password
  const navigate = useNavigate();

  async function handleSignup(){ //async because it is an api call
    try{
      setLoading(true); //while user is getting registered disable signup button
      
      await signup(emailRef.current.value,passwordRef.current.value); //sending email id and password as promise
      navigate("/dashboard");
    }
    catch(err){
      console.log(err);
      alert("Error! ")
    }
    setLoading(false)
  }

//   async function handleLogin(){ //async because it is an api call
//     try{
//       setLoading(true); //while user is getting registered disable signup button
      
//       await login(emailRef.current.value,passwordRef.current.value); //sending email id and password as promise
//     }
//     catch{
//       alert("Error! ")
//     }
//     setLoading(false)
    
//   }

//   async function handleLogout(){
//     setLoading(true);
//     try{
//       await logout()
//     } catch{
//       alert("error!");
//     }
//     setLoading(false);
//   }
  return(
    // <div>
    // <form>
    //     <input  ref={emailRef}type="email" placeholder="email" />
    //     <input ref={passwordRef} type="password" placeholder="password" />
    //     <input></input>
    // </form>
    // <button  onClick={handleSignup}>Sign up</button>
    // {/* <button disabled={loading || currentUser!=null} onClick={handleLogin}>Log in</button> */}
    // {/* <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button> */}
    // </div>  
    <div className='login-container'>
    
        <Form className='login-form'>
        <h1 className='font-weight-bold text-secondary'>Sign Up Here!</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input ref={emailRef}type="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label>Enter Name</Label>
          <Input type="text" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input ref={passwordRef} type="password" placeholder="Enter password" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-control"
            />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="asl">ASL</Label>
          <Input type="checkbox" placeholder="asl" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="brailleboards">Braille Boards</Label>
          <Input type="checkbox" placeholder="brailleboards" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lift">Lift</Label>
          <Input type="checkbox" placeholder="lift" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ramps">Ramps</Label>
          <Input type="checkbox" placeholder="ramps" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="wheelchair">Wheel chairs</Label>
          <Input type="checkbox" placeholder="wheelchair" />
        </FormGroup>
        
        <Button className="btn-lg btn-dark btn-black" onClick={handleSignup}>Sign Up</Button>

        </Form>
        
    </div>
  )
}

export default Signup