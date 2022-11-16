import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="image"/>

      <div className="card-items">
        <h2>
          <span>
            <img
              src="https://cdn4.iconfinder.com/data/icons/twitter-29/512/157_Twitter_Location_Map-512.png"
              alt="gps"
              width="20px"
            />
          </span>
          {props.location.toUpperCase()}
        </h2>
        <a href={props.googleMapsUrl}>
          <u>View on Google maps</u>
        </a>
        <h1>{props.title}</h1>
        <h5>
          <span>{props.startDate} - </span>
          <span>{props.endDate}</span>
        </h5>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
