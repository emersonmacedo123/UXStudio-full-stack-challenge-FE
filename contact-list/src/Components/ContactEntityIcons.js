import React from 'react'
import DropDownComponent from './DropDownComponent'


//import icons
import muteIcon from '../Icons/Vectormute.png'
import phoneIcon from '../Icons/VectorPhones.png'


export const ContactEntityIcons = (props) => {

  return (
    <div className='contact-entity-icons'>
      <DropDownComponent id={props.id} name={props.name} phoneNumber={props.phoneNumber} emailAddress={props.emailAddress} imagePath={props.imagePath}/>
        {/* <button type="button" class="btn float-right ml-2"><img src={dots3Icon} /></button> */}
        <button type="button" className="btn float-right ml-2"><img src={phoneIcon} /></button>
        <button type="button" className="btn float-right ml-2"><img src={muteIcon} /></button>
        
    </div>
  )
}
