import React from 'react'
import ContactEntity from './ContactEntity'
import ListGroup from 'react-bootstrap/ListGroup'
import ContactList from './ContactList'


const Contacts = () => {
  return (
    <div className='contacts-box'>
        <div className='contact-title'>
            <h1>Contacts</h1>
        </div>
        <ContactList />
       
    </div>
  )
}

export default Contacts