import React from 'react'
import { Placeholder } from 'react-bootstrap'

const UploadImageButton = () => {
    
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_present', 'profilePicture')
    }

  return (
    <div>
        <h1>Upload Image</h1>
        <input type="file" name="file" placeholder="Upload Image" onChange={uploadImage}></input>
        
    </div>
  )
}

export default UploadImageButton