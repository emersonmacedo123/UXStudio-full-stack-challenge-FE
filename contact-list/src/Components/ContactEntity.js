import React from 'react'
import Avatar from 'react-avatar';
import defaultAvatar from '../Images/default_avatar.png'; 

const ContactEntity = () => {
  return (
        <>
        <div className='avatar'>
          <Avatar  rounded src={defaultAvatar}  round={true} avatarStyle={{  borderWidth: 1, borderColor: 'green', borderRadius: 5, borderStyle:'solid' }}/>
                    
          {/* <Avatar 
          style={{ round:"20px", borderWidth: 2, borderColor: 'white', borderStyle:'solid' }} name="Foo Bar" />             */}
        </div>
        <div className='contact-entity'>
            <button type="button" class="btn btn-warning float-right ml-2">Save</button>
            <button type="button" class="btn btn-warning float-right ml-2">Save</button>
            <h3>Name</h3>
            <h4>Phone Number</h4>
        </div>
        </>
        
  )
}


// ContactEntity.defaultProps = {
//   imageSource: './'
// }

export default ContactEntity