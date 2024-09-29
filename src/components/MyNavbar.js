import React from 'react';
import "./MyNavbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import SocialMediaIcons from './SocialMediaIcons';
import LogoHeader from "../assets/icons/LogoHeader.png";

function MyNavbar() {
  return (
    <header>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={LogoHeader}
              width="70"
              height="auto"
              className="d-inline-block align-top"
              alt="Logo de L'Atelier Tarpin Bois"
            />
          </Navbar.Brand>
          {/* Bouton pour mobile */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto align-items-center">
              <Nav.Link href="/" className='text-white fs-4' >Accueil</Nav.Link>
              <Nav.Link href="/about" className='text-white fs-4'>L'atelier</Nav.Link>
              <Nav.Link href="/contact" className='text-white fs-4'>Contact</Nav.Link>

                <SocialMediaIcons  />

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNavbar;
