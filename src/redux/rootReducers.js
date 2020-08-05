import { combineReducers } from "redux";
import { postsReducer } from './postsReducer'
import { loaderReducer } from './loaderReducer'

export const rootReducers = combineReducers({
  postsReducer,
  loaderReducer
})