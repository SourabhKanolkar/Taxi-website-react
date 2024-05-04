import  { useState, useEffect } from 'react';
import logo from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${scrolled ? 'test-navbar' : ''}`}>
        <div className="container-fluid navbar-phone">
          <a className="navbar-brand" style={{ color: '#fff' }} href="#">
           {/* <img src={logo} className='img-fluid logo'  alt='logo'></img> */}
           Rudransh Taxi Service
          
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us-section">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#packages-section-1">
                  Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#specialpack-section">
                  Specials Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service-section">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cars-section">
                  Cars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us-section">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger get-btn">Get Started</button>
        </div>
      </nav>
    </>
  );
}
