import React from 'react'


//import icons
import muteIcon from '../Icons/Vectormute.png'
import phoneIcon from '../Icons/VectorPhones.png'

import DropDownComponent from './DropDownComponent'

export const ContactEntityIcons = () => {

  return (
    <div className='contact-entity-icons'>
      <DropDownComponent />
        {/* <button type="button" class="btn float-right ml-2"><img src={dots3Icon} /></button> */}
        <button type="button" className="btn float-right ml-2"><img src={phoneIcon} /></button>
        <button type="button" className="btn float-right ml-2"><img src={muteIcon} /></button>
        
    </div>
  )
}
