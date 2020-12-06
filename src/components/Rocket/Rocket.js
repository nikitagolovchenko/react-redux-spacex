import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOne } from "../../actions/rockets";

const Rocket = (props) => {
  const { id } = props.match.params;
  const rocket = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOne(id));
  }, []);

  const render = () => {
    if (rocket.rocket) {
      const rocketItem = rocket.rocket;

      return (
        <div className="card-rocket">
          <h1>{rocketItem.rocket_name}</h1>
          <small>{rocketItem.rocket_type}</small>
          <div className="images">
            {rocketItem.flickr_images.map((el, index) => {
              return <img src={el} alt="" key={index} />;
            })}
          </div>
          <hr />
          <p>
            country <span className="descr">{rocketItem.country}</span>
          </p>
          <p>
            company <span className="descr">{rocketItem.company}</span>
          </p>
          <hr />
          <p>
            height <span className="descr">{rocketItem.height.meters}</span>
          </p>
          <p>
            diameter <span className="descr">{rocketItem.diameter.meters}</span>
          </p>
          <p>
            mass <span className="descr">{rocketItem.mass.kg}</span>
          </p>
        </div>
      );
    }

    if (rocket.errorMsg) {
      return rocket.errorMsg;
    }

    return "Loading...";
  };

  return (
    <>
      {render()}
      <Link to="/" className="back-link">
        Back to home
      </Link>
    </>
  );
};

export default Rocket;
