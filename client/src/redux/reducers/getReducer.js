import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
};

export default function getReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
