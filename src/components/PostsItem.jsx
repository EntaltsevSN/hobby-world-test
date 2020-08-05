import React from 'react'
import { Media, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removePost, editPost } from '../redux/actions'
import VerticalModal from './Modal'
import parse from 'html-react-parser';

function PostsItem({ id, title, body }) {
  const [modalShow, setModalShow] = React.useState(false)
  
  const dispatch = useDispatch()

  function removePostHandler(e) {
    e.preventDefault()

    dispatch(removePost(id))
  }
  
  function editPostHandler(post) {
    console.log(post)
    dispatch(editPost(post))
  }

  return (
    <Media className="p-3 border rounded mb-4">
      <Media.Body>
        <h5>{title}</h5>
        <p>
          {parse(body)}
        </p>
        <i>
          <Button variant="link" onClick={e => setModalShow(true)}>Edit</Button>
          <Button variant="link" onClick={e => removePostHandler(e)}>Remove</Button>
        </i>
      </Media.Body>
      <VerticalModal 
        show={modalShow} 
        onHide={() => setModalShow(false)} 
        id={id} 
        title={title}
        body={body}
        type="edit"
        editPost={editPostHandler}
      />
    </Media>
  )
}

export default PostsItem