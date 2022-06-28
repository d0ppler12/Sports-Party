import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const NavbarComp = () => {
  return (
    <>
      <Nav className="justify-content-center sticky-top navbar">
        <Nav.Item>
          <Nav.Link href="#home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#cricket-matches">CRICKET</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#football-matches">FOOTBALL</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#valorant-matches">VALORANT</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavbarComp;
