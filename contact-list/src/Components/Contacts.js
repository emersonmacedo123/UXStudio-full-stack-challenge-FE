import React from 'react'
import ContactEntity from './ContactEntity'
import ContactList from './ContactList'
import { Dropdown } from 'bootstrap'


//import icons
import arrowBackIcon from '../Icons/VectorarrowBack.png'
import engineIcon from '../Icons/Vectorengine.png'
import userProfileIcon from '../Icons/PhotouserProfile.png'
import addNewIcon from '../Icons/State=Default, Type=PrimaryaddNewShape.png'


const Contacts = () => {
  return (
    <div className='main-container'>
      <div className='main-container-narrow'>
        <div className='contacts-box'>
        <div className='contact-title'>
          <button type="button" class="btn float-right ml-2"><img src={arrowBackIcon} alt="my image" /></button>
            <h1>Contacts</h1>
            <button type="button" class="btn float-right ml-2"><img src={engineIcon} alt="my image" /></button>
            <button type="button" class="btn float-right ml-2"><img src={userProfileIcon} alt="my image" /></button>
            <button type="button" class="btn float-right ml-2"><img src={addNewIcon} alt="my image" /></button>
        </div>
        <ContactList />
        
    </div>
      </div>
    
    </div>
    
  )
}

export default Contacts