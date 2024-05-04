import React from 'react'
import './styles/Features.css'

export default function Featurespage() {
  return (
    <>
  <section id="features-seaction">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 mt-3">
                                <img style={{borderRadius:"7px"}} className='img-fluid' src='https://profalo.in/ajittaxi/assets/img/my/water.jpg' alt='imag'></img>
                            </div>
                            <div className="col-lg-6 mt-3">
                            <img style={{borderRadius:"7px"}} className='img-fluid' src='https://profalo.in/ajittaxi/assets/img/my/water.jpg' alt='imag'></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 mt-3">
                                <img style={{borderRadius:"7px"}} className='img-fluid' src="https://profalo.in/ajittaxi/assets/img/my/mangeshi.jpg" alt="charuch" />
                            </div>
                            <div className="col-lg-6 mt-3">
                                <img style={{borderRadius:"7px"}} className='img-fluid' src="https://profalo.in/ajittaxi/assets/img/my/mangeshi.jpg" alt="beach" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-6">
                <div className="icon-box mb-3 ">
               <div className="icon-box-name d-flex">
               <i style={{fontSize:"48px",color:"#ffc451",marginRight:"8px"}} className="bi bi-car-front-fill"></i>
                <h4>Vehicle Booking</h4>
               </div>
                <p>Here user can schedule the trip, choose vehicle class, check avaliable options and book a car</p>

                </div>

                <div className="icon-box mb-3 ">
               <div className="icon-box-name d-flex">
               <i style={{fontSize:"48px",color:"#ffc451",marginRight:"8px"}} className="bi bi-journal"></i>
                <h4>Ride Management</h4>
               </div>
                <p>During the whole trip it is possible to change final destination, payment method, share route or order extra vehicle</p>

                </div>

                <div className="icon-box mb-3 ">
               <div className="icon-box-name d-flex">
               <i style={{fontSize:"48px",color:"#ffc451",marginRight:"8px"}} className="bi bi-shield"></i>
                <h4>Sober Driver</h4>
               </div>
                <p>Our experienced driver will drive you car and bring you to your destination in time</p>

                </div>

            </div>

        </div>
    </div>
  </section>
    </>
  )
}
