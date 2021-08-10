import { GET_USERS, GET_USER } from "./types";
import axios from "axios";
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/get-info`);
    console.log(res.data)
    dispatch({ type: GET_USERS, payload: res.data});
  } catch (err) {
    console.log(err);
  }
};

export const getUser = (email) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/user/get-info/${email}`);
    console.log(res.data)
    dispatch({ type: GET_USER, payload: res.data});
  } catch (err) {
    console.log(err);
  }
};
