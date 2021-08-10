import {GET_USERS,GET_USER} from "../actions/types";


const initialState = {
  user: {},
  loading: true,
  users: [],
};


export default function(state=initialState,action){
  const {type,payload}=action;

  switch(type){
    case GET_USERS:
      return {...state,users:payload,loading:false}
    case GET_USER:
      return {...state,user:payload[0],loading:false}
      default:
        return state;
  }

}