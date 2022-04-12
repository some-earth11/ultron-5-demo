import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Home.css';
import {useNavigate} from 'react-router-dom';
// import img-1 from './images/img-1.jpg';
function Home(){
    const navigate = useNavigate();
    function handleRegister(){  
        navigate("/signup");
    }
    function handleLog(){
        navigate("/login");
    }
    return(
        <div className='home-container'>
        {/* <video src="/videos/video-1.mp4" autoPlay loop muted></video> */}
        {/* <img src='/images/img-1.jpg' /> */}
        <h4>Made Easy For The Specially-abled</h4>
        <p>Because every person with a disability is an individual</p>
        <div className="home-btns">
            <Button onClick = {handleRegister} className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                REGISTER WITH US 
            </Button>
            <Button  onClick={handleLog} className='btns' buttonStyle='btn-primary' buttonSize='btn--large'>
                LOGIN 
            </Button>
            
        </div>

        </div>
    )
}
export default Home;