import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title, guides } = tour;

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
    selectedGuide: "", // Include selectedGuide in the booking state
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 50;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

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
        body: JSON.stringify(booking), // Send the updated booking object
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
      setLoading(false);
    }
  };

  const handleGuide = (event) => {
    const selectedValue = event.target.value;
    setBooking((prev) => ({ ...prev, selectedGuide: selectedValue })); // Update booking state with selected guide
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-item-center justify-content-between">
        <h3>
          ₹{price}
          <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup className="border border-black">
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="border border-black">
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup className="border border-black p-2">
            {guides ? (
              <select
                id="selectedGuide"
                value={booking.selectedGuide} // Use booking.selectedGuide for controlled component
                required
                onChange={handleGuide}
                className="w-full border-none focus:outline-none focus:ring focus:ring-white"
              >
                <option value="" disabled>
                  Select a guide
                </option>
                {guides.map((guide, index) => (
                  <option key={index} value={guide}>
                    {guide}
                  </option>
                ))}
              </select>
            ) : null}
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
              className="border border-black"
              min={new Date().toISOString().split("T")[0]}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
              className="border border-black"
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <div className="d-flex justify-content-between">
          <h5 className="d-flex align-items-center gap-1">
            ₹{price} <i className="ri-close-line"></i> 1 person
          </h5>
          <span> ₹{price}</span>
        </div>
        <div className="d-flex justify-content-between">
          <h5>Service charge</h5>
          <span> ₹50</span>
        </div>
        <div className="d-flex justify-content-between total">
          <h5>Total</h5>
          <span> ₹{totalAmount}</span>
        </div>

        <Button
          className="btn primary__btn w-100 mt-4"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? "Processing..." : "Book Now"}
        </Button>
      </div>
    </div>
  );
};

export default Booking;
