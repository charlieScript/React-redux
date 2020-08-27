import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import cakeReducer from "./cake/cakeReducer";
import  iceCreamRedcer  from "./icecream/iceCreamReducer";


const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceCreamRedcer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store