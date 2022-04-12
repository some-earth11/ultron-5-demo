import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';
function About() {
  return (
  <div>
  <section className="bg-light mt-5" id="about">    
     <div className="container">
      <div className="row text-center">
        <div className="col-sm-12 col-md-12 mb-4">
            <h3 className="text-center mt-4 text-secondary">Why We Need Mis-Match</h3>
         </div>
        <div className="col-md-4">
          <div className="testimonial mb-5">
           <div className="avatar mx-auto">
            <img src="/images/about-img-1.jpg" className=" z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold mt-4">Braille</h4>
          {/* <h6 className="font-weight-bold blue-text my-3">Subhead</h6> */}
          <p className="font-weight-normal dark-text">
          Braille boards and other equipment for the visually impaired
is a neccessity to make facilities inclusive and accessible to all.</p>
        </div>
      </div>
 
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="/images/about-img-2.jpg" className="z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Ramps</h4>
          {/* <h6 className="font-weight-bold blue-text my-3">Subhead</h6> */}
          <p className="font-weight-normal dark-grey-text">A detailed description of availability of ramps and wider doorways helps
the user to easily access the building of their choice.</p>
        </div>
 
      </div>
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="/images/about-img-3.avif" className="z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Parking spots</h4>
          {/* <h6 className="font-weight-bold blue-text my-3">Subhead</h6> */}
          <p className="font-weight-normal dark-grey-text">
          Information regarding the parking spots in various facilities is
not easily available online.</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
 </div>
  );
}
 
export default About;

