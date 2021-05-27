import { Nav, Navbar, Button } from 'react-bootstrap';
import Logo from '../assets/logo-murda.png';

function Hero() {
  return (
    <div className="hero">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            alt="Murda Beatz Logo"
            width="169"
            height="134"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto hero__side-nav">
            <Nav.Link className="hero__nav-link" href="#releases">
              Releases
            </Nav.Link>
            <Nav.Link className="hero__nav-link" href="#videos">
              Videos
            </Nav.Link>
            <Nav.Link className="hero__nav-link" href="#store">
              Store
            </Nav.Link>
            <Nav.Link className="hero__nav-link" href="#photos">
              Photos
            </Nav.Link>
            <Nav.Link className="hero__nav-link" href="#subscribe">
              Subscribe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="hero__icon-container">
        <i class="fas fa-envelope hero__icon"></i>
        <i class="fab fa-spotify hero__icon"></i>
        <i class="fas fa-music hero__icon"></i>
        <i class="fab fa-instagram hero__icon"></i>
        <i class="fab fa-twitter hero__icon"></i>
        <i class="fab fa-facebook-f hero__icon"></i>
      </div>
      <div className="hero__header-text">
        <h4 className="hero__subtitle">Check out on Splice</h4>
        <h1 className="hero__title">Murda Beatz’ Quarantine Kit Sample Pack</h1>
        <a href="#">
          <button className="hero__button">Listen Now</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
