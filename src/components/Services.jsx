import React from 'react'
import './styles/Services.css'

export default function Services() {
  return (
   <>
   <section id="service-section">
    <div className="container">
        <div className="section-title-service">
            <h2  >CHECK OUR SERVICES</h2>
        </div>
        <div className="row text-center">
            <div className="col-lg-4 col-md-6    ">
               <div className="icon-box">
               <i style={{fontSize:"48px",color:"#ffc451"}} className="bi bi-shield"></i>
               <h3>easy booking</h3>
               <p>Select the type of booking you wish to make, whether 'outstation', 'local' or 'airport'</p>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-center   ">
               <div className="icon-box">
               <i style={{fontSize:"48px",color:"#ffc451"}} className="bi bi-airplane-fill"></i>
               <h3>Cab service all over Goa</h3>
               <p>Book a taxi from Rudransh Taxi Service in Goa airport and travel without a worry, Savaari style.</p>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-center  ">
               <div className="icon-box">
               <i style={{fontSize:"48px",color:"#ffc451"}} className="bi bi-emoji-smile    "></i>
               <h3>Punctual service</h3>
               <p>Excellent track record of on-time service. Our call center will be in touch with you ensuring there are absolutely no delays.</p>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-center  ">
               <div className="icon-box">
               <i style={{fontSize:"48px",color:"#ffc451"}} className="bi bi-person-square   "></i>
               <h3>Driver Expertise</h3>
               <p>Drivers are chosen through a 30-point checklist and possess an intimate knowledge of route</p>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-center  ">
               <div className="icon-box">
               <i style={{fontSize:"48px",color:"#ffc451"}} className="bi bi-person-square   "></i>
               <h3>Multiple Cab Options</h3>
               <p>We have a variety of options to suit your individual needs, from hatchbacks, to luxury cars and tempo travellers.</p>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-center  ">
               <div className="icon-box">
               <i style={{fontSize:"48px",color:"#ffc451"}} className="bi bi-car-front   "></i>
               <h3>Multiple Cab Options</h3>
               <p>Your safety on your trip is our responsibility. We take extra care to sanitize and air our cabs before and after every ride.</p>
               </div>
            </div>

        </div>
    </div>

   </section>
   </>
  )
}
