import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  let badgetext;
  if (props.openSpots === 0) {
    badgetext = "SOLD OUT";
  } else if (props.openSpots >= 1) {
    badgetext = "ONLINE";
  }
  return (
    <div className="card">
      {badgetext && <div className="card-badge">{badgetext}</div>}
      <img src={props.coverImg} className="card-image" />
      <div className="card-stats">
        <FontAwesomeIcon icon={faStar} style={{ color: "#eb0f0f" }} />
        <span>{props.stats.rating} </span>
        <span className="gray">{props.stats.reviewCount} • </span>
        <span className="gray">USA</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">{props.price}</span>$ / person
      </p>
    </div>
  );
}
