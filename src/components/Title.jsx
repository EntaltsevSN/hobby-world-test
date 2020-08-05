import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'

function Title() {
  const dispatch = useDispatch()
  const loaderStatus = useSelector(state => state.loaderReducer)
  return (
    <h2 className="mb-4">
      Posts
      <Button 
        variant="primary" 
        className="ml-3"
        disabled={loaderStatus}
        onClick={() => dispatch(fetchPosts())}
      >{loaderStatus ? 'Loading…' : 'Reload'}</Button>  
    </h2>
  )
}

export default Title