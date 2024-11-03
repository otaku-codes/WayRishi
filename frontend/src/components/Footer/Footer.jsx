import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const quick__links2 = [
  { path: "/login", display: "Login" },
  { path: "/register", display: "Register" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const segmentWidth = 35;
  const numberOfZigzags = 50;
  const height = 15;

  // Create points for zigzag
  let points = [];
  for (let i = 0; i < numberOfZigzags; i++) {
    points.push(`${i * segmentWidth},${height}`);
    points.push(`${(i + 0.5) * segmentWidth},0`);
  }

  points.push(`${numberOfZigzags * segmentWidth},${height}`);
  const pointsString = points.join(" ");

  return (
    <footer className="text-center text-lg-start">
      <div className="new_footer_top">
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
        <div className="container p-4">
          <div className="row my-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 specail">
              <div
                className="rounded-circle shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ maxWidth: "150px", minWidth: "210px" }}
              >
                <img src={logo} height="70" alt="Logo" loading="lazy" />
              </div>
              <p className="text-center">
                Uncover New Horizons
                <br />
                Embrace Timeless Memories
              </p>
              <div className="social__links d-flex align-items-center gap-4 justify-center">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-2">
              <h5 className="text-uppercase mb-4 font-semibold">Pages</h5>
              <ListGroup className="footer__quick-link">
                {quick__links.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="ps-0 border-0"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-2">
              <h5 className="text-uppercase mb-4 font-semibold">Quick Links</h5>
              <ListGroup className="footer__quick-link">
                {quick__links2.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="ps-0 border-0"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-2">
              <h5 className="text-uppercase mb-4 font-semibold">Contact</h5>
              <ListGroup className="footer__quick-link">
                <ListGroupItem
                  className="ps-0 border-0 d-flex align-items-center gap-3"
                  style={{ backgroundColor: "transparent" }}
                >
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0">Mohali, Punjab</p>
                </ListGroupItem>

                <ListGroupItem
                  className="ps-0 border-0 d-flex align-items-center gap-3"
                  style={{ backgroundColor: "transparent" }}
                >
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-mail-line"></i>
                    </span>
                    Email:
                  </h6>
                  <p className="mb-0">realtrickswizard@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem
                  className="ps-0 border-0 d-flex align-items-center gap-3"
                  style={{ backgroundColor: "transparent" }}
                >
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-phone-fill"></i>
                    </span>
                    Phone:
                  </h6>
                  <p className="mb-0">+919045227954</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <svg width="100%" height={height} preserveAspectRatio="none">
          <polygon points={pointsString} fill="black" />
        </svg>
        <div className="text-center p-3 bg-black text-white">
          Copyright {year}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
