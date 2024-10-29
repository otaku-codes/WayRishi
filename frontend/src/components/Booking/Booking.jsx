import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const [loading, setLoading] = useState(false); // Step 1: Loading state to manage duplicate requests

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();
    
    if (loading) return; // Prevent duplicate clicks
    
    setLoading(true); // Set loading to true to disable button and prevent further clicks

    try {
      if (!user) {
        setLoading(false);
        return alert("Please sign in");
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        setLoading(false);
        return alert(result.message);
      }

      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false); // Reset loading state after process completes
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-item-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* ========Booking Form====================== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ========Booking End====================== */}

      {/* ========Booking Bottom====================== */}
      <div className="booking__bottom">
        <div className="d-flex justify-content-between">
          <h5 className="d-flex align-items-center gap-1">
            ${price} <i className="ri-close-line"></i> 1 person
          </h5>
          <span> ${price}</span>
        </div>
        <div className="d-flex justify-content-between">
          <h5>Service charge</h5>
          <span> $10</span>
        </div>
        <div className="d-flex justify-content-between total">
          <h5>Total</h5>
          <span> ${totalAmount}</span>
        </div>

        <Button
          className="btn primary__btn w-100 mt-4"
          onClick={handleClick}
          disabled={loading} // Step 2: Disable button when loading
        >
          {loading ? "Processing..." : "Book Now"} {/* Show loading text */}
        </Button>
      </div>
    </div>
  );
};

export default Booking;
