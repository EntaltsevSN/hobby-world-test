import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_POSTS, GET_POSTS } from './actionTypes'
import { hideLoader, showLoader, cleanPosts } from './actions'

export function* sagaWatcher() {
  yield takeEvery(FETCH_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(cleanPosts())
    yield put(showLoader())
    const payload = yield call(getPosts)
    yield put({ type: GET_POSTS, payload }) 
    yield put(hideLoader())
  } catch(e) {
    console.log(e);
  }
}

async function getPosts() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
  return await response.json()
}