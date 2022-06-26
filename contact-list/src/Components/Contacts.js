import React, { useState } from 'react'
import ContactList from './ContactList'
import Button from 'react-bootstrap/esm/Button'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'


//import icons
import arrowBackIcon from '../Icons/VectorarrowBack.png'
import engineIcon from '../Icons/Vectorengine.png'
import userProfileIcon from '../Icons/PhotouserProfile.png'
import addNewIcon from '../Icons/State=Default, Type=PrimaryaddNewShape.png'


const Contacts = () => {
  const [modalShow, setModalShow] = useState(false);


  return (
    <div className='main-container'>
      <div className='main-container-narrow'>
        <div className='contacts-box'>
          <div className='contact-title'>
            <button type="button" className="btn float-right ml-2"><img src={arrowBackIcon} alt="my image" /></button>
            <h1>Contacts</h1>
            <button type="button" className="btn float-right ml-2"><img src={engineIcon} alt="my image" /></button>
            <button type="button" className="btn float-right ml-2"><img src={userProfileIcon} alt="my image" /></button>

            {/* {for the form add new contact} */}
            <button type="button" className="btn float-right ml-2" onClick={() => setModalShow(true)}>
              <img src={addNewIcon} alt="my image" />
            </button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <ContactList />

        </div>
      </div>

    </div>

  )
}

export default Contacts