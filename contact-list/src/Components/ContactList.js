import React, {useState} from 'react'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ContactEntity from './ContactEntity'
import axios from 'axios';
import { Button } from 'react-bootstrap';

const ContactList = () => {

  const [contacts, setContacts] = useState([]);

    const getDataFunction = () => {
        axios.get('http://localhost:8080/contacts').then(r => setContacts(r.data));
        console.log(contacts);
    }

    if(contacts.length === 0){
      getDataFunction();
      
    }  

  return (
    <ListGroup>
      {contacts.length === 0 ? 
      <p>No users available</p>
      : 
      contacts.map((contact) =>
        <ListGroup.Item><ContactEntity 
          id={contact.id}  
          name={contact.name} 
          phoneNumber={contact.phoneNumber}
          emailAddress={contact.emailAddress}
          avatarImage={contact.imagePath}  /></ListGroup.Item>
      )}
      
      
      </ListGroup>
  )
}

export default ContactList