import * as actionTypes from "./actionTypes";

const fetchData = () => (dispatch) => {
  console.log("is it fetching");
  fetch("/student_email")
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: actionTypes.FETCH_DATA,
        payload: data,
      })
    );
};

export default fetchData;
