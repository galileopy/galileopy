import Resource from "../../ghost-stories/resource";
import { PROFILE_REQUEST } from "../actionTypes";
import { merge } from "ramda";

const profile = {
  resource: Resource.Empty({})
};

export default (state = profile, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return merge(profile, { resource: action.payload });
    default:
      return state;
  }
};
