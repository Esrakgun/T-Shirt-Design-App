
 
import designReducer from "./designReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
    auth:authReducer,
    design:designReducer,
})


export default mainReducer;