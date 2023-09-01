import productListReducer from "./reducer";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
// import {createLogger} from 'redux-logger'

// const reduxLogger = createLogger()

const Store = createStore(
  productListReducer,
  applyMiddleware(
    thunkMiddleWare
    // reduxLogger
  )
);

export default Store;
