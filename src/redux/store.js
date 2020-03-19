import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reducers from "./reducers";
import epics from "./epics";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const configureStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const enhancer = composeEnhancers(
    applyMiddleware(epicMiddleware)
    // other store enhancers if any
  );
  const store = createStore(reducers, enhancer);
  epicMiddleware.run(epics);
  return store;
};

export default configureStore;
