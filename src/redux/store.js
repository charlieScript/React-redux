import { createStore, combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import  iceCreamRedcer  from "./icecream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceCreamRedcer
})

const store = createStore(rootReducer)

export default store