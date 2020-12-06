import { FETCH_ONE_ROCKET, FETCH_ONE_ERROR } from "../types";

const initialState = {
  rocket: null,
  errorMsg: "",
};

const rocket = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_ROCKET:
      return {
        ...state,
        rocket: action.payload,
      };
    case FETCH_ONE_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default rocket;
