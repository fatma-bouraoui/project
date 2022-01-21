import {combineReducers } from "redux" ;
import {userReducer} from "./user";
import { usersReducer } from "./users";
export const rootReducer= combineReducers({userReducer , usersReducer});
