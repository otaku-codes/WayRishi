
<div className="guide-details-container">
        <div className="guide-image-container">
          <img src={docInfo.image} alt={docInfo.name} />
        </div>

        <div className="guide-info-container">
          <h2>{docInfo.name}</h2>
          <p><strong>Speciality:</strong> {docInfo.speciality}</p>
          <p><strong>Degree:</strong> {docInfo.degree}</p>
          <p><strong>Experience:</strong> {docInfo.experience}</p>
          <p><strong>Consultation Fees:</strong> ${docInfo.fees}</p>
          <p><strong>Address:</strong> {`${docInfo.address.line1}, ${docInfo.address.line2}`}</p>
          <p><strong>About:</strong> {docInfo.about}</p>
        </div>
      </div>