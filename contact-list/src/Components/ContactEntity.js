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
        <div className='avatar'>
          <Avatar  src={props.avatarImage} round={true} avatarStyle={{  borderWidth: 1, borderColor: 'green', borderRadius: 5, borderStyle:'solid' }}/>
        </div>

        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='contact-entity'>
          <div>
            <h3>Name</h3>
            <h4>Phone Number</h4>
          </div>
          
          {isHovering && <ContactEntityIcons /> }
        </div>
        </>
        
  )
}

ContactEntity.defaultProps = {
  avatarImage: defaultAvatar
  
};


// ContactEntity.defaultProps = {
//   imageSource: './'
// }

export default ContactEntity