import PouchDB from "pouchdb";
import { PROFILE_HOST } from "../parameters";
import Resource from "../ghost-stories/resource";

const db = new PouchDB(`${PROFILE_HOST}/cv-profile`);
export const getProfile = ({ id }) =>
  db.get(id).then(Resource.fromResult({ id }), Resource.fromError({ id }));
