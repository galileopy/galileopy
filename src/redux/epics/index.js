import { combineEpics } from "redux-observable";
import devrant from "./devrant";
import profile from "./profile";

export default combineEpics(devrant, profile);
