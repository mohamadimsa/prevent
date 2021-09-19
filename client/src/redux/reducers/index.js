import { combineReducers } from "redux";
import { auth } from "./auth";
import {serie} from './serie';
export const rootReducer = combineReducers({
    auth,
    serie
});