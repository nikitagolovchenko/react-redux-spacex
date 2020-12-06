import React from "react";
import { Link } from "react-router-dom";

const RocketPreview = (props) => {
  return (
    <div className="rocket-item">
      <h1>{props.name}</h1>
      <small>{props.type}</small>
      <div className="images">
        <img src={props.img} alt="" />
      </div>
      <hr />
      <Link className="read-more" to={"/rocket/" + props.rocket_id}>Read details</Link>
    </div>
  );
};

export default RocketPreview;
