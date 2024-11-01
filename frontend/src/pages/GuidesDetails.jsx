// src/pages/GuideDetails.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Newsletter from "../shared/Newsletter";
import GuideCommon from "../shared/GuideCommon";
import MainApp from "./MainApp";

const GuideDetails = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const fetchDocInfo = () => {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(docInfo);
      // console.log(docInfo);
    };

    if (doctors.length > 0) {
      fetchDocInfo();
    }
  }, [doctors, docId]);

  if (!docInfo) return <p>Loading...</p>;

  return (
    <>
      <GuideCommon title={docInfo.name} />
      <MainApp docInfo={docInfo}/>
      <Newsletter />
    </>
  );
};

export default GuideDetails;
