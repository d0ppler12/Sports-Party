import React from "react";
import CarouselComp from "./components/CarouselComp";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import NavbarComp from "./components/NavbarComp";
import Cricket from "./components/Cricket";

export default () => (
  <>
    <Container fluid id="home">
      <CarouselComp />
      <NavbarComp />
      <div classname="row">
        <p>keghkrfjgjkegjkrfgjhbjhvbjkbvjkbsjvk</p>
        <p>keghkrfjgjkegjkrfgjhbjhvbjkbvjkbsjvk</p>
        <p>keghkrfjgjkegjkrfgjhbjhvbjkbvjkbsjvk</p>
        <p>keghkrfjgjkegjkrfgjhbjhvbjkbvjkbsjvk</p>
        <p>keghkrfjgjkegjkrfgjhbjhvbjkbvjkbsjvk</p>
        <p>keghkrfjgjkegjkrfgjhbjhvbjkbvjkbsjvk</p>
        <p>keghkrfjgjkegjkrfgjhbjhvbjkbvjkbsjvk</p>
      </div>
      <section className="Cricket-matches" id="cricket-matches">
        <Cricket />
      </section>
    </Container>
  </>
);
