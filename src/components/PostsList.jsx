import React from 'react'
import PostsItem from './PostsItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Loader from './Loader'

function PostsList() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.postsReducer)
  const loaderStatus = useSelector(state => state.loaderReducer)
  React.useEffect(() => dispatch(fetchPosts()), [dispatch])
  
  return (
    <>
      { posts.length > 0 
        ? posts.map(({id, title, body}) => <PostsItem key={id} id={id} title={title} body={body} /> )
        : loaderStatus ? <Loader/> : `There are no posts`
      }
    </>
  )
}

export default PostsList