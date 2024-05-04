import React from 'react'
import "./styles/Home.css"
import Navbar from "./Navbar"
import logo from '../assets/logo.png'

export default function Home() {
  return (
    <>
     <section id="home-page-section" >
       <Navbar />
        <div className="container ">
            <div className="row ">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center   " style={{height:"580px"}}>
                     {/* <h2 style={{color:"#fff",textAlign:"center"}} className='animate__animated animate__fadeInDown'>Taxi Services in<br></br> Goa.</h2> */}
                     <img className='img-fluid' src={logo} alt="sss" style={{height:"400px"}} />
                    
                    
                     
                     {/* <button className='btn btn-danger cl-now-btn ms-3 me-3 '><i className="bi bi-telephone-fill animate__animated  animate__fadeIn "></i> <a href='#contact-us-section'></a>Call Now</button> */}

                     <a  className='btn btn-primary home-call-btn '  href="#booknow-section"> <i style={{marginRight:"5px"}} className="bi bi-telephone-fill animate__animated  animate__fadeIn "></i>Call Now</a>
                   
                </div>
            </div>
            
            <div className="row d-flex justify-content-center justify-content-around ">
              <div className="col-md-3 mt-3 box-home  d-flex flex-column justify-content-center align-items-center animate__animated  animate__fadeInUpBig" >
              <i className="bi bi-geo-alt" style={{fontSize:"32px",color:"#ffc451"}}></i>
                <h4 className='text-center' style={{color:'#fff'}} >Local</h4>
               
              </div>

              <div className="col-md-3 box-home  mt-3 d-flex flex-column justify-content-center align-items-center  animate__animated  animate__fadeInUpBig" >
              <i class="bi bi-arrow-clockwise"style={{fontSize:"32px",color:"#ffc451"}}></i>
                <h4 className='text-center' style={{color:'#fff'}} >One Way</h4>
               
              </div>
              <div className="col-md-3 box-home mt-3  d-flex flex-column justify-content-center align-items-center  animate__animated  animate__fadeInUpBig" >
              <i className="bi bi-airplane" style={{fontSize:"32px",color:"#ffc451"}}></i>
                <h4 className='text-center' style={{color:'#fff'}} >Pickup</h4>
               
              </div>
              <div className="col-md-3 box-home mt-3  d-flex flex-column justify-content-center align-items-center  animate__animated  animate__fadeInUpBig" >
              <i class="bi bi-airplane-engines" style={{fontSize:"32px",color:"#ffc451"}}></i>
                <h4 className='text-center' style={{color:'#fff'}} >Drop</h4>
               
              </div>
              
            </div>

           
        </div>
     </section>
    </>
  )
}
