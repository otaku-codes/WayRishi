import React, { useRef, useEffect } from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/himanshu-1.png";
import heroImg02 from "../assets/images/rahul-1.png";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import experienceImg from "../assets/images/experience.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <>
      {/* {==================Hero Section Starts==========} */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Your Adventure Awaits"} />
                  <img
                    src={worldImg}
                    alt=""
                    style={{ width: "6.3rem", height: "6.3rem" }}
                  />
                </div>
                <h1>
                  Uncover New Horizons, Embrace Timeless
                  <span className="highlight"> Memories</span>
                </h1>
                <p>
                  Step out, explore the extraordinary, and create memories that
                  last forever. Travel turns fleeting moments into treasures –
                  just waiting to be discovered
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video
                  ref={videoRef}
                  src={heroVideo}
                  alt=""
                  autoPlay
                  muted
                  loop
                />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* {Hero Section Start} */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we server</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* {Hero Section End} */}

      {/* {Featured tour section start} */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* {Featured tour section end} */}

      {/* {Experience Section Start} */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Eperience"} />
                <h2>
                  With our all experince <br /> we will serve you
                </h2>
                <p>
                  We strive to create unique travel experiences that turn every
                  trip into an unforgettable memory .
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>100+</span>
                  <h6>Loyal Clients</h6>
                </div>
                <div className="counter__box">
                  <span>50+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>1+</span>
                  <h6>Year of Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* {Experience Section End} */}

      {/* ===========Gallery Section Starts=============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Discover Our Customer Adventures
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===========Gallery Section Ends=============== */}

      {/* ===========Testmonial Section Starts=============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                Fan Experiences That Inspire Us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===========Testmonial Section Ends=============== */}

      {/* ===========Newsletter Section Starts=============== */}
      <Newsletter />
    </>
  );
};

export default Home;
