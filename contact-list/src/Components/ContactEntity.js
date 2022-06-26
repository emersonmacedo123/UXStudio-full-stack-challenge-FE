import React, {useState} from 'react'
import Avatar from 'react-avatar';
import defaultAvatar from '../Images/default_avatar.png'; 
import { ContactEntityIcons } from './ContactEntityIcons';


const ContactEntity = (props) => {

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
        {/* <img src='/images/AdebayoprofilePictres.png' alt="image" /> */}
        <div className='avatar'>          
          <Avatar  src={props.imagePath} round={true} avatarStyle={{  borderWidth: 1, borderColor: 'green', borderRadius: 5, borderStyle:'solid' }}/>
        </div>

        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='contact-entity'>
          <div>
            <h3>{props.name}</h3>
            <h4>{props.phoneNumber}</h4>
          </div>
          
          {isHovering && <ContactEntityIcons id={props.id} name={props.name} phoneNumber={props.phoneNumber} emailAddress={props.emailAddress} imagePath={props.imagePath}/> }
        </div>
        </>
        
  )
}




export default ContactEntity