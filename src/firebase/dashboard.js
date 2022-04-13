import React, { Component} from "react";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import {useNavigate} from 'react-router-dom';

function Dash(){
  const navigate = useNavigate();
      async function handleAdd(){ //async because it is an api call
        try{
          // setLoading(true); //while user is getting registered disable signup button
          
           //sending email id and password as promise
          console.log("yay you are logged in")
          navigate("/map.html");
        }
        catch(err){
          console.log(err)
          navigate("/map.html");
        }}
    return(
        <div className="app">
          <div className="app-body">
            <div className="app-body-navigation">
              <nav className="navigation">
                  <br></br>
                <a href="#">
                  <i className="ph-browsers" />
                  <span>Dashboard</span>
                </a>
                <a href="#">
                  <i className="ph-check-square" />
                  <span>Profile</span>
                </a>
                <a href="#">
                  <i className="ph-swap" />
                  <span>Manage Places</span>
                </a>
                <a href="#">
                  <i className="ph-file-text" />
                  <span>Edit a Place</span>
                </a>
                <a href="#">
                  <i className="ph-globe" />
                  <span>Add a Place</span>
                </a>
                <a href="#">
                  <i className="ph-clipboard-text" />
                  <span>Settings</span>
                </a>
              </nav>
              <footer className="footer">
                <div>
                  Mis-Match ©<br />
                  All Rights Reserved 2022
                </div>
              </footer>
            </div>
            <div className="app-body-main-content">
              <section className="service-section">
                <h2>Your Places</h2>
        <div className="payment-section-footer">
        <Button className="save-button" onClick={handleAdd}>Add</Button>
        </div>
      </section>
    </div>
          </div>
        </div>
      )
}

export default Dash;

// btn-lg btn-dark btn-black