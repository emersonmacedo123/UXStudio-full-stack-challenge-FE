import React from 'react'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ContactEntity from './ContactEntity'

const ContactList = () => {
  return (
    <ListGroup>
      <ListGroup.Item><ContactEntity /></ListGroup.Item>
      <ListGroup.Item><ContactEntity /></ListGroup.Item>
      <ListGroup.Item><ContactEntity /></ListGroup.Item>
      <ListGroup.Item><ContactEntity /></ListGroup.Item>
      <ListGroup.Item><ContactEntity /></ListGroup.Item>
      </ListGroup>
  )
}

export default ContactList