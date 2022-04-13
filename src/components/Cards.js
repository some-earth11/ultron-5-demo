import React from 'react'
import CardItem from './CardItem';  
import {Card, Button} from "react-bootstrap";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Cards.css'


function Cards() {
  return (
    <div className='main-container'>
    <h1>WHAT WE OFFER</h1>
    
    
            
   
        
    <div className="container-fluid d-flex justify-content-center">
    
      <div className="row">
        <div className="col-md-4">
          <CardItem 
            imgsrc='../images/cards-img-1.avif'
          title="Voice-Assist" 
            content="Voice assistance in the app for the visually challenged"
          />
        </div>
        <div className="col-md-4">
          <CardItem 
            imgsrc="../images/cards-img-2.jpg"
          title="Registration" 
            content="Online registration portals for companies to register facilities offered"
          />
        </div>
        <div className="col-md-4">
          <CardItem imgsrc="../images/cards-img-3.jpg" title="Navigation" 
            content="Navigation system in app for users throughout the journey"
          />
        </div>
        {/* <div className="card-container"></div>
        <div className="card-container"></div> */}
      </div>
    </div> 
        
    
    
        </div>
    

  )
}

export default Cards