import React, { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import { Form } from "react-bootstrap";
import Avatar from 'react-avatar';
import defaultAvatar from '../Images/default_avatar.png';
import newImageTest from '../Images/LucyprofilePictres.png';
import addPictureIcon from '../Icons/Icon + LabeladdPicture.png'
import deletePictureIcon from '../Icons/Icon onlydeletePhoto.png'
import UploadImageButton from './UploadImageButton';
import axios from 'axios';
import {useImage} from 'react-image'



const MyVerticallyCenteredModal = (props) => {
    const [imagePath, setImagePath] = useState('')
    const [contactName, setContactName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [avatarImage, setAvatarImage] = useState(defaultAvatar);

    const saveNewContact = (event) => {
        //get the data from states
        const newContact = {
            "name": contactName,
            "phoneNumber": phoneNumber,
            "emailAddress": emailAddress,
            "imagePath": imagePath
        }
        
        //confirm getting data
        console.log(newContact);

        axios.post("http://localhost:8080/new-contact", newContact).then(response => {
            if (response.data != null) {
                console.log(newContact)
            }
        })

        //prevent refreshing the page after submit
        event.preventDefault();

        //set values to initial state after submitted
        setContactName('');
        setPhoneNumber('');
        setEmailAddress('');
        setAvatarImage('');

        
        const closeModal = props.onHide;
        closeModal();
        window.location.reload(false);
    }


    const handleFile = (e) => {
        setAvatarImage(require('../Images/' + e.target.files[0].name))
        setImagePath('/Images/' + e.target.files[0].name);
    }

    const ref = useRef()
    const handleClick = (e) => {
        ref.current.click()
    }

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
                        <Avatar src={avatarImage} round={true} avatarStyle={{ borderWidth: 1, borderColor: 'green', borderRadius: 5, borderStyle: 'solid' }} />
                        <button onClick={handleClick} type="button" className="btn ml-2"><img src={addPictureIcon} alt="my image" /></button>
                        <input ref={ref} type="file" name='file' onChange={(e) => handleFile(e)} style={{ display: 'none' }} />
                        <button type="button" className="btn ml-2"><img src={deletePictureIcon} onClick={() => setAvatarImage(defaultAvatar)} /></button>
                    </div>

                    <Form.Group className="mb-3" controlId="form-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            autoComplete='off'
                            type="text"
                            placeholder="Jamie Wright"
                            autoFocus
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-phone-number">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            required
                            autoComplete='off'
                            type="text"
                            placeholder="+36 20 1234 5678"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            autoComplete='off'
                            type="email"
                            placeholder="name@example.com"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button className='modal-button' onClick={props.onHide}>Cancel</Button>
                <Button type="submit" className='modal-button' onClick={saveNewContact}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

MyVerticallyCenteredModal.defaultProps = {
    avatarImage: defaultAvatar

};

export default MyVerticallyCenteredModal