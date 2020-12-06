import {
  FETCH_ALL_ROCKETS,
  FETCH_ERROR,
  FETCH_ONE_ROCKET,
  FETCH_ONE_ERROR,
} from "../types";

const URL = "https://api.spacexdata.com/v3/rockets";

export const fetchRockets = () => {
  return (dispatch) => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: FETCH_ALL_ROCKETS,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: FETCH_ERROR,
          payload: e.message,
        });
      });
  };
};

export const fetchOne = (id) => {
  return (dispatch) => {
    fetch(`${URL}/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: FETCH_ONE_ROCKET,
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: FETCH_ONE_ERROR,
          payload: e.message,
        });
      });
  };
};
