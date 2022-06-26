import React from 'react'
import Dropdown from 'react-bootstrap/DropdownButton' 
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import axios from 'axios'

//import icons
import muteIcon from '../Icons/Vectormute.png'
import phoneIcon from '../Icons/VectorPhones.png'
import dots3Icon from '../Icons/VectorthreeDots.png'
import engineIcon from '../Icons/Vectorengine.png'
import favIcon from '../Icons/VectorHeart.png'
import removeIcon from '../Icons/VectorRemove.png'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

const DropDownComponent = (props) => {
  const deleteContact = () => {
    const toBeDeleted = {
      "id": props.id
    }

    axios.delete("http://localhost:8080/delete-contact/" + props.id, toBeDeleted).then(response => {
            if (response.data != null) {
                console.log(toBeDeleted)
            }
        })
        window.location.reload(false);
    }

  return (
    <div className='dropdown-menu-end'>
        <Dropdown variant="dark" title={<img src={dots3Icon} />}>
            <DropdownItem><img src={engineIcon} /> Edit</DropdownItem>
            <DropdownItem><img src={favIcon} /> Favorite</DropdownItem>
            <DropdownItem onClick={deleteContact}><img src={removeIcon} /> Remove</DropdownItem>
        </Dropdown>
    </div>
  )
}

export default DropDownComponent