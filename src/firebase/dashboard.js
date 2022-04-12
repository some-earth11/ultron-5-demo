import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';

function Dash(){
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
                  <span>Scheduled</span>
                </a>
                <a href="#">
                  <i className="ph-swap" />
                  <span>Transfers</span>
                </a>
                <a href="#">
                  <i className="ph-file-text" />
                  <span>Templates</span>
                </a>
                <a href="#">
                  <i className="ph-globe" />
                  <span>SWIFT</span>
                </a>
                <a href="#">
                  <i className="ph-clipboard-text" />
                  <span>Exchange</span>
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
          <button className="save-button">
            Save
          </button>
        </div>
      </section>
    </div>
          </div>
        </div>
    )
}

export default Dash;