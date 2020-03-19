import { filter, flatMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { from } from "rxjs";

import { PROFILE_REQUEST } from "../actionTypes";
import { profileRequest } from "../actions";
import Resource from "../../ghost-stories/resource";
import { getProfile } from "../../services/profile";

// this is where I need to process the action
// and the other place is where I need to dispatch it
export default ($action, $state) =>
  $action.pipe(
    ofType(PROFILE_REQUEST),
    filter(action => Resource.Query.hasInstance(action.payload)),
    flatMap(action => from(getProfile(action.payload.params))),
    map(profileRequest)
  );
