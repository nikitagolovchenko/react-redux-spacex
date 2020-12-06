import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "../../actions/rockets";
import RocketPreview from "./RocketPreview";

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const render = () => {
    if (rockets.rockets.length !== 0) {
      return (
        <div className="rockets-list">
          {rockets.rockets.map((el) => {
            return (
              <RocketPreview
                key={el.id}
                name={el.rocket_name}
                type={el.rocket_type}
                img={el.flickr_images[0]}
                rocket_id={el.rocket_id}
              />
            );
          })}
        </div>
      );
    }

    if (rockets.errorMsg) {
      return rockets.errorMsg;
    }

    return "Loading...";
  };

  return render();
};

export default Rockets;
