import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "My stay in Chaukori was nothing short of magical. The serene views and the peaceful ambiance made it the perfect getaway.",
      name: "Anjali Sharma",
      location: "Chaukori, Uttarakhand",
      image: "https://app.tanyakhanijow.com/wp-content/uploads/2022/12/4F2A9861-6-1-1.jpg",
    },
    {
      text: "Kausani is a hidden gem! The hospitality was exceptional, and I loved every moment of my stay here. Highly recommend!",
      name: "Ravi Mehta",
      location: "Kausani, Uttarakhand",
      image: "https://www.solotravellersmeetup.com/wp-content/uploads/2017/10/1-696x464.jpg",
    },
    {
      text: "Udhampur offers such beautiful landscapes! I had an amazing time exploring the local culture and cuisine.",
      name: "Sanjay Kumar",
      location: "Udhampur, Jammu & Kashmir",
      image: "https://ascentdescentadventures.com/wp-content/uploads/2023/09/Mukesh-Marwah-Owner-Pixelvj-on-Solo-Trek-jpg.webp",
    },
    {
      text: "The tranquility of Chaukori is unparalleled. The hospitality was heartwarming, and the views were breathtaking!",
      name: "Pooja Verma",
      location: "Chaukori, Uttarakhand",
      image: "https://img.freepik.com/premium-photo/indian-girl-enjoying-rock-mountains-hill_437792-434.jpg",
    },
    {
      text: "Kausani is perfect for a weekend getaway! I enjoyed the scenic beauty and the friendly locals. Will definitely come back!",
      name: "Nisha Gupta",
      location: "Kausani, Uttarakhand",
      image: "https://inspireuadventures.com/wp-content/uploads/2018/02/trekking-nepal-por-libre-1.jpg",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial py-4 px-3" key={index}>
          <p>{`"${testimonial.text}"`}</p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              src={testimonial.image}
              alt="Customer"
              style={{
                width: "80px", // Set your desired width
                height: "80px", // Set your desired height
                objectFit: "cover", // Use cover to maintain aspect ratio and fill the space
                borderRadius: "50%", // Optional: Make the images circular
              }}
            />
            <div>
              <h6 className="mb-0 mt-3">{testimonial.name}</h6>
              <p>{testimonial.location}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
