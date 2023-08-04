import { FETCH_BEERS_SUCCESS, SET_FILTERS } from "./actions";

const initialState = {
  beers: [],
  filters: {
    brewed_before: "",
    brewed_after: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS_SUCCESS:
      return {
        ...state,
        beers: action.payload,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
