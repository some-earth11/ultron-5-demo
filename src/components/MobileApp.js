import React from 'react'
import './MobileApp.css'

function MobileApp() {
  return (
    
    <div className='app-container'>
        {/* <div className='content-container'>
            <div className='catch-phrase'>
                Lorema Ipsum
            </div>
            <div className='description'>
                Lorem Ipsum hfdkgglekgishius
            </div>
            <div className='app-download'>
            <a className="btn btn-google" href="#" title="Google Play">
                <img className="app-img-google" src='/images/google-play-badge.png'></img>
            </a>
            <a className="btn btn-google" href="#" title="App Store">
                <img className="app-img-apple" src='/images/app-store-badge.png'></img>
            </a>   
        </div>
            <div className='img-container'>
                <img src="/images/app-img-1.jpeg" className='img-1'></img>
                <img src="/images/app-img-2.jpeg" className='img-2'></img> 
            </div>
    
    </div> */}
        <div >
            <img src="/images/mobile-app-ss.png" className='img-container'></img>
        </div>
        <div className='content-container'>
            <h2>Get Our App!</h2>
            <p style={{color:"#8f969d"}}>Look Around. Go there before you get there. <br></br>Download our app now for a walking guide right in your pocket.</p>
            <img className="app-button" src='/images/app-badges.png'></img>
        </div>  
    </div>

  )

  }

export default MobileApp;
