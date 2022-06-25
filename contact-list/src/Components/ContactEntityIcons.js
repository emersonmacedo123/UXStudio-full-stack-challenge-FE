import React from 'react'

//import icons
import muteIcon from '../Icons/Vectormute.png'
import phoneIcon from '../Icons/VectorPhones.png'
import dots3Icon from '../Icons/VectorthreeDots.png'
import engineIcon from '../Icons/Vectorengine.png'
import favIcon from '../Icons/VectorHeart.png'
import removeIcon from '../Icons/VectorRemove.png'


export const ContactEntityIcons = () => {
  return (
    <div className='contact-entity-icons'>
        <button type="button" class="btn float-right ml-2"><img src={dots3Icon} /></button>
        <button type="button" class="btn float-right ml-2"><img src={phoneIcon} /></button>
        <button type="button" class="btn float-right ml-2"><img src={muteIcon} /></button>
    </div>
  )
}
