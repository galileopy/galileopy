import { curry } from "ramda";
import { PROFILE_REQUEST } from "./actionTypes";
const create = curry((type, payload) => ({ type, payload }));
// I USUALLY DO THIS FOR EMPTY SIGNALS, PROBABLY NOT GOING TO USE IT HERE
//const empty = type => () => ({ type });

export const profileRequest = create(PROFILE_REQUEST);
