import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppContextProvider, { AppContext } from "../context/AppContext";
import "./guides.css"; // Ensure this file contains the necessary CSS
import GuideCommon from "../shared/GuideCommon";
import Newsletter from "../shared/Newsletter";

const Guides = () => {
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const specialityParam = queryParams.get("speciality");

    if (specialityParam) {
      setSelectedSpecialities(specialityParam.split(","));
    } else {
      setSelectedSpecialities([]);
    }
  }, [location]);

  const applyFilter = () => {
    if (selectedSpecialities.length > 0) {
      setFilterDoc(
        doctors.filter((doc) => selectedSpecialities.includes(doc.speciality))
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, selectedSpecialities]);

  const handleSpecialityChange = (spec) => {
    setSelectedSpecialities((prevSelected) => {
      const updatedSelection = prevSelected.includes(spec)
        ? prevSelected.filter((s) => s !== spec)
        : [...prevSelected, spec];

      navigate(`?speciality=${updatedSelection.join(",")}`);
      return updatedSelection;
    });
  };

  return (
    <>
      <GuideCommon title={"All Guides"} />
      <div className="flex w-full px-10 sm:px-20 my-4">
        <div className="w-1/5 pr-5 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center p-4">Filters</h2>
          <hr className="border-gray-300 mb-4" />
          <div className="flex-col gap-4 text-sm text-gray-600 text-center">
            <h4 className="font-bold text-lg">Select Location</h4>
            {[
              "Almora",
              "Chaukori",
              "Oli",
              "Asol",
              "J",
            ].map((spec) => (
              <label key={spec} className="flex items-center pl-3 text-lg mx-3">
                <input
                  type="checkbox"
                  checked={selectedSpecialities.includes(spec)}
                  onChange={() => handleSpecialityChange(spec)}
                  className="mr-2 h-5 w-5"
                />
                <span className="ml-2">{spec}</span>
              </label>
            ))}
          </div>
          <hr className="border-gray-300 my-4" />
        </div>

        <div className="w-4/5 mx-3 guide-wrapper "> 
          <h3 className="text-2xl font-bold text-gray-600 mb-3">
            {filterDoc.length} guide{filterDoc.length !== 1 ? 's' : ''} found
            {selectedSpecialities.length === 0 ? '' : ' for selected filters'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 gap-y-6">
            {filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/guides/${item._id}`)}
                className="guide-image-container" // Only the image will be clickable
                key={index}
              >
                <img
                  className="guide-image"
                  src={item.image}
                  alt={item.name}
                />
                <div className="guide-overlay">
                  <p className="guide-name">{item.name}</p>
                  <p className="guide-speciality">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-4" />
      <Newsletter />
    </>
  );
};

const GuidesPage = () => {
  return (
    <AppContextProvider>
      <Guides />
    </AppContextProvider>
  );
};

export default GuidesPage;
