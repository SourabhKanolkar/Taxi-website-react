import React from 'react'
import './styles/Contactus.css'

export default function Contactus() {
  return (
  <>
  <section id="contact-us-section">
    <div className="container">
        <div className="contact-ttitle">
            <h2 style={{fontSize:"36px",fontWeight:"700"}}>CONTACT US</h2>
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                <i className="bi bi-geo-alt-fill contact-icons"></i>
                <h4 style={{fontSize:"22px",fontWeight:"600",marginBottom:"5px",paddingLeft:"60px"}}>Loaction:</h4>
                <p style={{paddingLeft:'60px',fontSize:"14px",color:"#484848"}}>Goa,india</p>
                </div>
                <div className="col-lg-4 col-md-6">
                <i className="bi bi-telephone-fill contact-icons"></i>
                <h4 style={{fontSize:"22px",fontWeight:"600",marginBottom:"5px",paddingLeft:"60px"}}>Call:</h4>
                <p style={{paddingLeft:'60px',fontSize:"14px",color:"#484848"}}>+91 88069 97971
</p>
                </div>
                <div className="col-lg-4 col-md-6">
                <i className="bi bi-chat-dots-fill contact-icons"></i>
                <h4 style={{fontSize:"22px",fontWeight:"600",marginBottom:"5px",paddingLeft:"60px"}}>Chat:</h4>
                <p style={{paddingLeft:'60px',fontSize:"14px",color:"#484848"}}>+91 88069 97971
</p>
                </div>
            </div>

        </div>
    </div>

  </section>
  
  </>
  )
}
