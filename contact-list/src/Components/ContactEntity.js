import React, {useState} from 'react'
import Avatar from 'react-avatar';
import defaultAvatar from '../Images/default_avatar.png'; 
import { ContactEntityIcons } from './ContactEntityIcons';


const ContactEntity = (props) => {

  const [avatarImage, setAvatarImage] = useState(defaultAvatar);
  var newImage = require("C:/Users/Asus Zenbook/Documents/GitHub/8 - Interviews Full Stack/02 - UX Studio -  Full Stack Dev Challenge - FrontEnd/UXStudio-full-stack-challenge-FE/contact-list/src" + props.avatarImage)
  
  
  //for show buttons when hovering
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  

  return (
        <>
        <div className='avatar'>          
          <Avatar  src={newImage} round={true} avatarStyle={{  borderWidth: 1, borderColor: 'green', borderRadius: 5, borderStyle:'solid' }}/>
        </div>

        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='contact-entity'>
          <div>
            <h3>{props.name}</h3>
            <h4>{props.phoneNumber}</h4>
          </div>
          
          {isHovering && <ContactEntityIcons id={props.id}/> }
        </div>
        </>
        
  )
}




export default ContactEntity