import { combineReducers } from "redux";

import devrant from "./devrant";
import profile from "./profile";

export default combineReducers({
  devrant,
  profile
});
