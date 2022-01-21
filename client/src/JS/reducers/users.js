import {GET_USERS_LOAD,GET_USERS_SUCCESS,GET_USERS_FAIL} from "../const/user";

const initialState={
    users:[],
    loadusers:false,
    errors:null,
};

export const usersReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case GET_USERS_LOAD: return{...state,loadusers:true};

            case GET_USERS_SUCCESS: return{...state, users:payload.result,loadusers:false} ;
                 

                case GET_USERS_FAIL: return{...state, loadusers:false,errors:payload};
            
            
    
        default: return state
            
    };
};