import { GET_USERS, GET_USER,ADD_USER } from "./types";
import axios from "axios"
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/user/get-info`);
    dispatch({ type: GET_USERS, payload: res.data});
  } catch (err) {
    console.log(err);
  }
};

export const getUser = (email) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/user/get-info/${email}`);
    dispatch({ type: GET_USER, payload: res.data});
  } catch (err) {
    console.log(err);
  }
};

export const addUser=(data,history)=>async(dispatch)=>{
  try {
    const body = data;
    const res = await axios.post(`/api/user/add-info`, body);
    dispatch({ type: ADD_USER, payload: res.data });
      alert("User added successfully")
    history.push('/')
  } catch (err) {
    alert("Please try picking unique email")
  }
}