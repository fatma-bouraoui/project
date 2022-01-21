import { LOAD_USER , REGISTER_USER , LOGIN_USER , LOGOUT_USER , FAIL_USER , GET_USERS_LOAD, GET_USERS_FAIL ,GET_USERS_SUCCESS} from "../const/user";
import axios from "axios";


export const registerUser = (user) => async dispatch => {

    dispatch  ({ type:LOAD_USER});
  
 try {
  const result = await axios.post ("/user/register" , user) //{user , msg , token}
  console.log(result)
  dispatch ({type : REGISTER_USER ,payload: result.data });
 } catch (error) {
     dispatch({type : FAIL_USER , payload : error});
     console.log(error)
 }
     
 

};

export const loginUser = (user) => async dispatch => {

    dispatch  ({ type:LOAD_USER});
  
 try {
  const result = await axios.post ("/user/login" , user) //{user , msg , token}
  localStorage.setItem ("token", result.data.token);
  dispatch ({type : LOGIN_USER ,payload: result.data });
 } catch (error) {
     dispatch({type : FAIL_USER , payload :error});
 }
     
 

};



export const getUsers = () => async (dispatch) => {
    dispatch ({type: GET_USERS_LOAD});
    try {
        let result = await axios.get("/user/");
        console.log(result);
        dispatch({ type:GET_USERS_SUCCESS , payload : result.data});
    } catch (error) {
        dispatch ({type:GET_USERS_FAIL, payload:error});
        console.log(error);
        
    }
  };