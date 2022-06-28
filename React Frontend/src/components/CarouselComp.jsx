import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
const CarouselComp = () => {
  return (
    <>
      <Carousel
        className="col-12 carousel-fade mx-auto pt-2"
        id="demo"
        style={{ maxHeight: "75%" }}
      >
        <Carousel.Item className="mh-100">
          <img
            className="d-block w-100"
            src="../cricket.jpg"
            alt="Cricket"
            style={{ filter: "blur(5px)" }}
          />
          <Carousel.Caption className="d-md-block car-caption">
            <p>Cricket</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="mh-100">
          <img
            className="d-block w-100"
            src="../football.jfif"
            alt="Second slide"
            style={{ filter: "blur(5px)" }}
          />
          <Carousel.Caption className="d-md-block car-caption">
            <p>Football.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="mh-100">
          <img
            className="d-block w-100"
            src="../valorant.jfif"
            alt="Third slide"
            style={{ filter: "blur(5px)" }}
          />
          <Carousel.Caption className="d-md-block car-caption">
            <p>Valorant</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselComp;
