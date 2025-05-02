import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section-footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company information</h6>
            <hr />
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking layout.
            </span>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact us</Link>
            </div>
            <div>
              <Link to="/blog">services</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact us</h6>
            <hr />
            <div>
              <span>#25 green leaf street, victoria island </span>
            </div>
            <div>
              <span>+234803179215</span>
            </div>
            <div>
              <span>+2349056748392</span>
            </div>
            <div>
              <span>nashy@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
