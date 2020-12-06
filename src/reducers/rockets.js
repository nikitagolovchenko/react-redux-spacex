import { FETCH_ALL_ROCKETS, FETCH_ERROR } from "../types";

const initialState = {
  rockets: [],
  errorMsg: "",
};

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ROCKETS:
      return {
        ...state,
        rockets: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default rockets;
