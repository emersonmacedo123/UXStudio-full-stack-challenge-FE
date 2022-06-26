import React , {useState} from 'react'
import Dropdown from 'react-bootstrap/DropdownButton' 
import axios from 'axios'

//import icons
import dots3Icon from '../Icons/VectorthreeDots.png'
import engineIcon from '../Icons/Vectorengine.png'
import favIcon from '../Icons/VectorHeart.png'
import removeIcon from '../Icons/VectorRemove.png'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import EditModal from './EditModal'


const DropDownComponent = (props) => {
  const [editModalShow, setEditModalShow] = useState(false);
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
            <DropdownItem onClick={() => setEditModalShow(true)}><img src={engineIcon} /> Edit</DropdownItem>
            <DropdownItem><img src={favIcon} /> Favorite</DropdownItem>
            <DropdownItem onClick={deleteContact}><img src={removeIcon} /> Remove</DropdownItem>
        </Dropdown>
        <EditModal show={editModalShow} onHide={() => setEditModalShow(false)} id={props.id} name={props.name} phoneNumber={props.phoneNumber} emailAddress={props.emailAddress} imagePath={props.imagePath} />
    </div>
  )
}

export default DropDownComponent