import React from 'react'
import './styles/Footer.css'
import clogo from '../assets/company-logo.png'


export default function Footer() {
  return (
  <>
  <section id="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-info">
                        <h3 style={{fontSize:"28px",marginBottom:"20px",fontWeight:"700",textTransform:"uppercase",color:"#fff"}}> Rudransh Taxi Service Goa</h3>
                        <p style={{color:"#fff"}}>Khobra Waddo, Calangute,<br></br> Goa 403516</p>
                    </div>

                </div>
                <div className="col-lg-2 col-md-6">

                    <h4 style={{color:"#fff",fontSize:"16px",fontWeight:'600',paddingBottom:'12px'}}>Cabs in Goa</h4>
                    <ul>
                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>Goa to Maharashtra</a></li>

                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>Goa to Karnataka</a></li>

                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>Goa to Bangalore</a></li>

                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>Goa to Pune</a></li>

                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>Goa to Mumbai</a></li>
                    </ul>

                </div>
                <div className="col-lg-3 col-md-6">
                <h4 style={{color:"#fff",fontSize:"16px",fontWeight:'600',paddingBottom:'12px'}}>Cabs in Goa</h4>
                <ul>
                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>
Taxi in Calangute</a></li>

                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>Cabs in Baga & Anjuna Beaches</a></li>

                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>Taxi in Panaji</a></li>

                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>
Dudhsagar Falls Cabs</a></li>

                        <li style={{listStyle:'none',color:'#fff',padding:'10px 0'}} className='list '><i style={{color:"#ffc451",paddingRight:'2px',fontSize:'18px'}} className="bi bi-chevron-compact-right"></i><a>& Many More Destinations</a></li>
                    </ul>


                </div>
                <div className="col-lg-4 col-md-6">
                   <h4 style={{color:'#fff',fontSize:'16px',fontWeight:'600',paddingBottom:"12px"}}>Rudransh Taxi Service- Goa</h4>
                   <p style={{color:"#fff",fontSize:"15px"}} className='lead'>&#169; All Rights Reserved By Rudransh Taxi Service</p>
                   <p style={{color:"#fff",fontSize:"15px"}} className='lead'>&#169; Designed by Avanteia</p>

                   <a href="https://www.avanteia.com/"><img src={clogo} className='img-fluid' style={{width:"200px",height:"160px"}} alt="logo-company" /></a>
                  
                </div>
            </div>
        </div>
  </section>
  
  </>
  )
}
