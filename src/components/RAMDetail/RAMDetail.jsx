import React from "react";
import "./ram-detail.scss";

function RAMDetail({ id, species, name, status, image, gender }) {
  return (
    <div className="ram-detail">
      {/* RAMDeatails: {idParam} */}
      <span>
        <strong>ID:</strong> {id}
      </span>
      <span>
        <strong>Species:</strong> {species}
      </span>
      <span>
        <strong>Gender:</strong> {gender}
      </span>
      <span>
        <strong>Name:</strong> {name}
      </span>
      <span>
        <strong>Status:</strong> {status}
      </span>
      <img src={image} alt={name} />
    </div>
  );
}

export default RAMDetail;
