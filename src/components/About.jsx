import React from 'react'
import "./styles/About.css"

export default function About() {
  return (
    <>
    <section id="about-us-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className='about-heading'>OUR COMMITMENT TO YOUR SAFETY</h2>
                    {/* <p className='lead'>With every safety feature we add and every standard in our Community<br></br> Guidlines we uphold, we're committed to working to create a safe<br></br> environment for our users.</p> */}
                    <p className="lead">At Rudransh Taxi Service, we uphold a steadfast commitment to providing
unparalleled transportation solutions, prioritizing your seamless travel experience
above all else. Your comfort and convenience lie at the core of our service ethos. We
meticulously ensure reliability and punctuality, coupling it with the expertise of our
professional drivers to guarantee a journey free of hassles</p>
                    <br></br>
                    {/* <p><i className="bi bi-check2-all"></i>Om Sai Tour And Travels rates never surge, so you can be sure that<br></br> you will never have to worry what the final price of your trip will be.</p> */}
                    <p><i className='bi bi-check2-all'></i><b>Pick your perfect ride:</b> Discover our varied vehicle options Choose the car that reflects your taste and meets your
preferences for an ideal ride.</p>

           <p><i className='bi bi-check2-all'></i><b>Select rental term:</b> Customize your rental experience by selecting the ideal term that suits your requirements.</p>

           <p><i className='bi bi-check2-all'></i><b>Choose destination now:</b> Begin your journey by selecting your desired destination</p>
       
                    
                </div>
                <div className="col-md-6">
                    <img src='https://profalo.in/ajittaxi/assets/img/about.jpg' className='img-fluid'></img>
                </div>
            </div>
        </div>
       

    </section>
    </>
  )
}
