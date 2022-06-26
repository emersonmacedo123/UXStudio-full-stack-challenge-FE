import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/DropdownButton' 
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'


//import icons
import muteIcon from '../Icons/Vectormute.png'
import phoneIcon from '../Icons/VectorPhones.png'
import dots3Icon from '../Icons/VectorthreeDots.png'
import engineIcon from '../Icons/Vectorengine.png'
import favIcon from '../Icons/VectorHeart.png'
import removeIcon from '../Icons/VectorRemove.png'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropDownComponent from './DropDownComponent'

export const ContactEntityIcons = () => {

  return (
    <div className='contact-entity-icons'>
      <DropDownComponent />
        {/* <button type="button" class="btn float-right ml-2"><img src={dots3Icon} /></button> */}
        <button type="button" class="btn float-right ml-2"><img src={phoneIcon} /></button>
        <button type="button" class="btn float-right ml-2"><img src={muteIcon} /></button>
        
    </div>
  )
}
