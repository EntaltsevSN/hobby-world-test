import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import CKEditor from 'ckeditor4-react';

function VerticalModal(props) {
  const [postBody, setPostBody] = useState(props.body)
  const [postTitle, setPostTitle] = useState(props.title)

  function onChangeTitle(e) {
    setPostTitle(e.target.value)
  }

  function onChangeBody(e) {
    setPostBody(e.editor.getData())
  }

  function onSubmitChanges() {
    props.editPost({
      id: props.id,
      title: postTitle,
      body: postBody      
    })
    props.onHide()
  }

  function undoChanges() {
    setPostTitle(props.title)
    setPostBody(props.body)
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {
            props.type === 'edit' && `Edit post`
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group>
        <Form.Control type="text" placeholder="Normal text" value={postTitle} onChange={e => onChangeTitle(e)} />
        <br />
        <CKEditor data={postBody} onChange={e => onChangeBody(e)} />
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {
          (props.type === 'edit') ? <>
            <Button variant="outline-primary" onClick={() => undoChanges()}>Undo changes</Button>
            <Button onClick={() => onSubmitChanges()}>Save changes</Button>
          </> : ``
        }
      </Modal.Footer>
    </Modal>
  );
}

export default VerticalModal