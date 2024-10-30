// src/pages/GuideDetails.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Newsletter from "../shared/Newsletter";
import GuideCommon from "../shared/GuideCommon";

const GuideDetails = () => {
  const { docId } = useParams(); 
  const { doctors } = useContext(AppContext); 
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {

    const foundDoc = doctors.find((doc) => doc._id === docId);
    setDocInfo(foundDoc); 
  }, [doctors, docId]);

  return (
    <>
     <GuideCommon title={"All Guides"} />
      <div>
      {docInfo ? (
        <>
          <h1>{docInfo.name}</h1>
          <p>Speciality: {docInfo.speciality}</p>
          <img src={docInfo.image} alt={docInfo.name} />
          <p>{docInfo.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <Newsletter/>
    </>
  );
};

export default GuideDetails;
