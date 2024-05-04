import React from 'react'
import "./styles/Package1.css"

export default function Packagespage() {
  return (
   <>
   <section id="packages-section-1">
    <div className="container">
        <div className="section-title-package1" style={{marginBottom:"40px"}}>
            <p className='lead ' style={{fontWeight:'500',fontSize:"13px"}}>PACKAGES AND TOUR  </p>
         <h2 style={{fontWeight:"700"}}>NORTH GOA TOUR</h2>
        </div>
       
          <div className="row">
            <div className="col-lg-3 " style={{borderRight:"2px solid #ce8f24"}}>
                <p className='spots-packages'>Chapora Fort</p>
                <p className='spots-packages'>Vagator Beach</p>
                <p className='spots-packages'>Anjuna Beach</p>
                <p className='spots-packages'>Fort Aguada</p>
                <p className='spots-packages'>Light House</p>
                <p className='spots-packages'>Calangute Beach</p>
                <p className='spots-packages'>Candolim Beach</p>
                <p className='spots-packages'>Baga Beach</p>
            </div>
              
              <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 >North Goa</h3>
                        <p className='lead'>Location: North Goa<br></br>
Timings: 9:30 am to 5:30 pm, every day</p>
                        <p className='lead'>We also provide additional trips with extra cost on this package including Dolphin trip, sight seeing</p>
                    </div>
                    <div className="col-lg-4">
                    <img className='img-fluid' src="https://profalo.in/ajittaxi/assets/img/my/dolphine.jpg" style={{height:"230px",borderRadius:"50%"}} alt="beach img" />
                    </div>
                </div>
              </div>

          </div>

    </div>
    {/* below is for south goa tour */}
    <div className="container">
        <div className="section-title-package1" style={{marginBottom:"40px"}}>
            <p className='lead ' style={{fontWeight:'500',fontSize:"13px"}}>PACKAGES AND TOUR  </p>
         <h2 style={{fontWeight:"700"}}>SOUTH GOA TOUR</h2>
        </div>
       
          <div className="row">
            <div className="col-lg-3 " style={{borderRight:"2px solid #ce8f24"}}>
                <p className='spots-packages'>Old Goa Church</p>
                <p className='spots-packages'>Mangeshi Temple/ Balaji <br></br> Temple</p>
                <p className='spots-packages'>Panjim City</p>
                <p className='spots-packages'>Miramar Beach</p>
                <p className='spots-packages'>Boat Cruise</p>
               
            </div>
              
              <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-8">
                        <h3>South Goa</h3>
                        <p className='lead'>Location: South Goa<br></br>
                        Timings: 9:30 am to 5:30 pm, every day</p>
                        <p className='lead'>We also provide additional trips with extra cost on this package which include Tropical Spice Plantation, Boat Cruise and Mandavi River.</p>
                    </div>
                    <div className="col-lg-4">
                    <img className='img-fluid' src="https://profalo.in/ajittaxi/assets/img/my/church.jpg" style={{height:"230px",borderRadius:"50%"}} alt="church img" />
                    </div>
                </div>
              </div>

          </div>

    </div>


   </section>
   </>
  )
}
