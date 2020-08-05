import { FETCH_POSTS, EDIT_POSTS, REMOVE_POSTS, SHOW_LOADER, HIDE_LOADER, CLEAN_POSTS } from "./actionTypes"

export const fetchPosts = () => ({ type: FETCH_POSTS })

export const editPost = post => ({
  type: EDIT_POSTS,
  payload: post
})

export const removePost = id => ({
  type: REMOVE_POSTS,
  payload: id
})

export const cleanPosts = () => ({
  type: CLEAN_POSTS,
  payload: []
})

export const showLoader = status => ({ 
  type: SHOW_LOADER,
  payload: true
})

export const hideLoader = status => ({ 
  type: HIDE_LOADER,
  payload: false
})