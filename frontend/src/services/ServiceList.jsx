import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Explore Destinations",
    desc: "Discover unique and breathtaking destinations curated just for you.",
  },
  {
    imgUrl: guideImg,
    title: "Trusted Tour Guides",
    desc: "Travel with confidence, accompanied by local guides who know every hidden gem.",
  },
  {
    imgUrl: customizationImg,
    title: "Personalized Itineraries",
    desc: "Get a customized itinerary that perfectly matches your interests and pace.",
  },
];


const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
