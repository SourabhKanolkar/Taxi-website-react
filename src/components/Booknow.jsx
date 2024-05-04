import React from 'react'
import './styles/Booknow.css'
export default function Booknow() {
  return (
   <>
   <section id="booknow-section">
    <div className="container">
        <div className="text-center">
            <h3 style={{fontSize:"28px",fontWeight:"700"}}>Book Now</h3>
            <p>Customers can hire a taxi in Goa, either through the website or by giving us a call on our 24X7 customer service number. <b>Book Now</b></p>
            <a className='btn btn-primary me-3  cta-btn' href='tel:88069 97971' ><i className="bi bi-telephone-fill"></i> Call TO Book</a>
            <a  className='btn btn-primary me-3 cta-chat   cta-btn' href=' https://wa.me/918806997971' ><i className="bi bi-whatsapp"></i> Chat TO Book</a>
        </div>
    </div>

   </section>
   </>
  )
}
