import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vm from "../inc/Vm";
import Service1 from "../images/service2.jpg";

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Link to="/about" className="btn btn-warning">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* mission and vision */}
      <Vm />

      {/* services */}
      <section className="section bg-c-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h3 className="main-heading">Our services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-6">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom service-image"
                />
              </div>
            </div>
            <div className="img-text">
              <h4>Reach out to us.</h4>
            </div>

            <div className="col-md-6">
              <h5>What we offer</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
