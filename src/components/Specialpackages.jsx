import React from 'react'
import "./styles/Specialpack.css"

export default function Specialpackages() {
  return (
  <>
  <section id="specialpack-section">
   <div className="container">
   <div className="section-title-package1" style={{marginBottom:"40px"}}>
            <p className='lead ' style={{fontWeight:'500',fontSize:"13px"}}>SPECIALS PACKAGES  </p>
         <h2 style={{fontWeight:"700"}}>SPECIAL PACKAGE - NORTH</h2>
        </div>
        <div className="row">
            <div className="col-lg-3 " style={{borderRight:"2px solid #ce8f24"}}>
                <p className='spots-packages'>Chapora Fort</p>
                <p className='spots-packages'>Vagator Beach</p>
                <p className='spots-packages'>Anjuna Beach</p>
               
            </div>
              
              <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 >Special Package</h3>
                        <p className='lead'>Timings: 9:30 am to 5:30 pm, every day</p>
                        <p className='lead'>The majestic cascade of white water, gushing over the steep, nearly<br></br> vertical face of the mountain from a spectacular height of 1017ft; is both breath taking and awe inspiring, making one aware that there are many forces in nature much more powerful that the human mind and body..</p>
                    </div>
                    <div className="col-lg-4">
                    <img className='img-fluid' src="https://profalo.in/ajittaxi/assets/img/my/Dudhsagar.jpg" style={{height:"230px",borderRadius:"50%"}} alt="beach img" />
                    </div>
                </div>
              </div>

          </div>
   </div>
   {/* below is for special south */}
   <div className="container">
   <div className="section-title-package1" style={{marginBottom:"40px"}}>
            <p className='lead ' style={{fontWeight:'500',fontSize:"13px"}}>SPECIALS PACKAGES  </p>
         <h2 style={{fontWeight:"700"}}>SPECIAL PACKAGE - SOUTH</h2>
        </div>
        <div className="row">
            <div className="col-lg-3 " style={{borderRight:"2px solid #ce8f24"}}>
                <p className='spots-packages'>Cab de Ram Fort</p>
                <p className='spots-packages'>Majorda Beach</p>
                <p className='spots-packages'>Palolem Beach</p>
               
            </div>
              
              <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 >South Goa</h3>
                        <p className='lead'>Timings: 9:30 am to 5:30 pm, every day</p>
                        <p className='lead'>Located in Canacona in Southern Goa, Palolem Beach is one of the most beautiful beaches in Goa. Known for its picturesque natural beauty and uncanny party vibes, this semi-circular beach is only a mile long.</p>
                    </div>
                    <div className="col-lg-4">
                    <img className='img-fluid' src="https://profalo.in/ajittaxi/assets/img/my/beach.jpg" style={{height:"230px",borderRadius:"50%"}} alt="beach img" />
                    </div>
                </div>
              </div>

          </div>
   </div>
   {/* below is for pick and drop box */}
   <div className="container">
   <div className="section-title-package1" style={{marginBottom:"40px"}}>
            <p className='lead ' style={{fontWeight:'500',fontSize:"13px"}}>
PICK-UP AND DROP SERVICE  </p>
         <h2 style={{fontWeight:"700"}}>PICKUP & DROP</h2>
        </div>
        <div className="row">
            <div className="col-lg-3 " style={{borderRight:"2px solid #ce8f24"}}>
                <p className='spots-packages'>pickup and drop to Airport</p>
                <p className='spots-packages'>Goa - Mumbai</p>
                <p className='spots-packages'>Goa - Pune</p>
                <p className='spots-packages'>Goa - Banglore</p>
                <p className='spots-packages'>Goa - Hampi</p>
               
            </div>
              
              <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 >PickUp and Drop</h3>
                        <p className='lead'>We also provide pick up and drop service all over Goa and also outside Goa.</p>
                        
                    </div>
                
                </div>
              </div>

          </div>
   </div>
  </section>
  </>
  )
}
