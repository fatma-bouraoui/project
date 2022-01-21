import { LOAD_USER , REGISTER_USER , LOGIN_USER , LOGOUT_USER , FAIL_USER } from "../const/user";
 
const initialState = {
    user : null,
    loadUser : false,
    errors : null,
    isAuth : false,
};

export const userReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case REGISTER_USER:
            return {...state , loadUser : false , user : payload.user , isAuth:true};
        case LOGIN_USER:
            return {...state , loadUser : false , user : payload.user , isAuth:true};
        case LOAD_USER:
            return {...state , loadUser : true};
        case FAIL_USER:
            return {...state , loadUser : false , errors: payload};
            
    
        default:
            return state;
    }
}