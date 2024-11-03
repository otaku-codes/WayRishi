import React from "react";
import "./about.css";
import dheeraj from "../assets/images/pic03.jpg";
import anish from "../assets/images/pic02.jpg";
import himanshu from "../assets/images/pic05.png";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Dheeraj Sharma",
      roles: ["Front-End Dev", "Content Writer"],
      imageSrc: dheeraj,
      instagram: "https://www.instagram.com/dheerajsharma_18/",
      github: "https://github.com/dheerajsharma10",
      linkedin: "https://www.linkedin.com/in/dheeraj-sharma-26679027b",
    },
    {
      name: "Anish Sharma",
      roles: ["UI/UX Designer", "Front-End Dev"],
      imageSrc: anish,
      backgroundColor: "black",
      instagram: "https://www.instagram.com/anishsharma_13/",
      github: "https://github.com/anishsharma2277",
      linkedin: "https://www.linkedin.com/in/anish-sharma-98643328a/",
    },
    {
      name: "Himanshu Papola",
      roles: ["Front-End Dev", "Back-End Dev"],
      imageSrc: himanshu,
      instagram: "https://www.instagram.com/otaku_codes/",
      github: "https://github.com/otaku-codes",
      linkedin: "#",
    },
  ];

  return (
    <>
      {" "}
      <div>
        {/* About Section */}
        <section id="about">
          <div className="container">
            <header className="section-header text-center mb-5 pb-2">
              <div className="title">
                <h4>About Us</h4>
              </div>

              <p>
                <span className="font-semibold" style={{ fontSize: "20px" }}>
                  Welcome to WayRishi, your ultimate travel companion!
                </span>
                <br /> We connect explorers with expert guides across various
                destinations in India, offering personalized experiences that
                enrich your journey. Whether you're seeking the serene
                landscapes of Jammu, the majestic mountains of Himachal Pradesh,
                or the breathtaking beauty of Uttarakhand, we have knowledgeable
                guides ready to help you uncover the hidden gems and local
                treasures of each region. From historical sites to cultural
                experiences, WayRishi ensures that your adventures are not just
                memorable but also immersive, allowing you to connect deeply
                with the vibrant tapestry of India's diverse landscapes and
                traditions.
              </p>
            </header>

            <div className="row about-cols">
              <div className="col-md-4 wow fadeInUp">
                <div className="about-col">
                  <div className="img">
                    <img
                      src="img/about-mission.webp"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="fas fa-bullseye"></i> {/* Updated icon */}
                    </div>
                  </div>
                  <h2 className="title">
                    <a href="#" style={{ textDecoration: "none" }}>
                      Our Mission
                    </a>
                  </h2>
                  <p className="text-center">
                    To make every journey memorable by providing seamless,
                    personalized travel experiences.
                  </p>
                </div>
              </div>

              <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="about-col">
                  <div className="img">
                    <img
                      src="img/about-plan.webp"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="fas fa-plane-departure"></i>{" "}
                      {/* Updated icon */}
                    </div>
                  </div>
                  <h2 className="title">
                    <a href="#" style={{ textDecoration: "none" }}>
                      What We Offer
                    </a>
                  </h2>
                  <p className="text-center">
                    Guided tours with local experts, Custom travel packages,
                    Easy booking and payment processes
                  </p>
                </div>
              </div>

              <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="about-col">
                  <div className="img">
                    <img
                      src="img/about-vision.webp"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="fas fa-eye"></i> {/* Updated icon */}
                    </div>
                  </div>
                  <h2 className="title">
                    <a href="#" style={{ textDecoration: "none" }}>
                      Our Vision
                    </a>
                  </h2>
                  <p className="text-center">
                    To become the leading platform for guided travel and
                    exploration, promoting cultural exchange and adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="wrapper">
        <div className="title">
          <h4>Meet Our Team</h4>
        </div>
        <div className="card_Container">
          {teamMembers.map((member, index) => (
            <div
              className="card"
              key={index}
              style={{ backgroundColor: member.backgroundColor || "white" }}
            >
              <div className="imbBx">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  style={{
                    filter: "grayscale(100%)",
                    width: "100%",
                    ...(member.name === "Dheeraj Sharma"
                      ? {
                          width: "125%",
                          maxWidth: "125%",
                        }
                      : member.name === "Anish Sharma"
                      ? {
                          width: "120%",
                          maxWidth: "120%",
                        }
                      : {}),
                  }}
                />
              </div>
              <div className="content">
                <div className="contentBx">
                  <h3>
                    {member.name}
                    <br />
                    <span>{member.roles.join(" / ")}</span>
                  </h3>
                </div>
                <ul className="sci">
                  <li style={{ "--i": 1 }}>
                    <a href={member.instagram} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li style={{ "--i": 2 }}>
                    <a href={member.github} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li style={{ "--i": 3 }}>
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="wow fadeIn">
        <div className="container text-center">
          <h3>Struggling to keep your travel dreams on track?</h3>
          <p className="text-center">
            Set your travel goals, plan unforgettable adventures, manage your
            itineraries, and connect with custom guides to enhance your journey.
          </p>
          <Link to="/" className="cta-btn" style={{ textDecoration: "none" }}>
            Start your journey today!
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
