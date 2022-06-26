import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import { Form } from "react-bootstrap";
import Avatar from 'react-avatar';
import defaultAvatar from '../Images/default_avatar.png'; 
import addPictureIcon from '../Icons/Icon + LabeladdPicture.png'
import deletePictureIcon from '../Icons/Icon onlydeletePhoto.png'


const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal className='modal-container' {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Contact
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
            <div className='modal-layer-1'>
                <Avatar  src={props.avatarImage} round={true} avatarStyle={{  borderWidth: 1, borderColor: 'green', borderRadius: 5, borderStyle:'solid' }}/>
                <button type="button" class="btn  ml-2"><img src={addPictureIcon} alt="my image" /></button>
                <button type="button" class="btn ml-2"><img src={deletePictureIcon} /></button>
            </div>

            <Form.Group className="mb-3" controlId="form-name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jamie Wright"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="form-phone-number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="+36 20 1234 5678"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                />
            </Form.Group>

        </Form>
        
      </Modal.Body>

      <Modal.Footer>
        <Button className='modal-button' onClick={props.onHide}>Cancel</Button>
        <Button className='modal-button' onClick={props.onHide}>Done</Button>
      </Modal.Footer>
    </Modal>
  )
}

MyVerticallyCenteredModal.defaultProps = {
    avatarImage: defaultAvatar
    
  };

export default MyVerticallyCenteredModal