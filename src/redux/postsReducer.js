import { EDIT_POSTS, REMOVE_POSTS, GET_POSTS, CLEAN_POSTS } from "./actionTypes";

const initialState = []

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return payload
    case CLEAN_POSTS:
      return []
    case EDIT_POSTS:
      return [...state.map(item => item.id === payload.id ? ({
        title: payload.title,
        body: payload.body
      }) : item)]  
    case REMOVE_POSTS:
      return [...state.filter(item => item.id !== payload)]
    default:
      return state
  }
}