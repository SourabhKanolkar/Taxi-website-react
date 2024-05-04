import React from 'react'
import './styles/Cars.css'

export default function Cars() {
  return (
    <>
   <section id="cars-section" style={{padding:"60px 0"}}>
   <div className="container">
        <div className="row">
        <div className="section-title-service">
            <h2 style={{fontWeight:"700",marginBottom:"40px"}}>OUR  CARS</h2>
        </div>
            <div className="col-md-3 mt-2 d-flex justify-content-center" >
            <div className="card" style={{width:"18rem"}}>
  <img src="https://imgd.aeplcdn.com/600x337/n/c6es93a_1572125.jpg?q=80" className="card-img-top" alt="car"/>
  <div className="card-body">
    <h5 className="card-title text-center">Eartiga</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
            </div>
            <div className="col-md-3 mt-2 d-flex justify-content-center">
            <div className="card" style={{width:"18rem"}}>
  <img src="https://imgd.aeplcdn.com/600x337/n/7lto5ua_1560265.jpg?q=80" className="card-img-top" alt="car"/>
  <div className="card-body">
    <h5 className="card-title text-center">Wagon R</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
            </div>
            <div className="col-md-3 mt-2 d-flex justify-content-center">
            <div className="card" style={{width:"18rem"}}>
  <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Innova Crysta</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
            </div>
            <div className="col-md-3 mt-2 d-flex justify-content-center">
            <div className="card" style={{width:"18rem"}}>
  <img src="https://imgd.aeplcdn.com/600x337/n/8u7i4ta_1508715.jpg?q=80" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Swift</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
            </div>
        </div>
    </div>
    
   </section>
    </>
  )
}
