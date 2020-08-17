// 3rd party
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import history from "./helpers/history";

// lib
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
let composeEnhancers = compose;
const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV !== "production" && typeof window === "object") {
  // eslint-disable-next-line no-undef
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    // eslint-disable-next-line no-undef
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    middleWares.push(logger);
  }
}

const store = createStore(
  reducer(history),
  composeEnhancers(applyMiddleware(...middleWares))
);
sagaMiddleware.run(rootSaga);

export default store;
