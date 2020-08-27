import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'
import cakeReducer from "./cake/cakeReducer";
import  iceCreamRedcer  from "./icecream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceCreamRedcer
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store