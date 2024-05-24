import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
    likesReducer,
    commentsReducer
})
