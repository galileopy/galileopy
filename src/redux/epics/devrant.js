import { ignoreElements } from "rxjs/operators";
export default ($action, $state) => $action.pipe(ignoreElements());
