import React from "react";
import Slider1 from "../images/slider1.jpg";

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slider1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="first-label">Nashy Bookings</h5>
            <h6 className="second-label">
              Some representative placeholder content for the first slide.Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using
            </h6>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Slider1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <h6>
              Some representative placeholder content for the second slide.
            </h6>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Slider1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <h6>
              Some representative placeholder content for the third slide.
            </h6>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Slider;
