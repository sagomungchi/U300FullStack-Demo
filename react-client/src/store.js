import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import rootReucer from "./reducers"

const initalState = {};
const middleware = [thunk];

let store

if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    rootReucer,
    initalState,
    compose(applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );

} else {
  store = createStore(
    rootReucer,
    initalState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
