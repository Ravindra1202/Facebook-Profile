import React from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
const Cover=()=>{
    return(
        <div className="cover">
            <div className="coverimage">
                <img src="./images/cover.jpg" alt="cover image not found" />
            </div>
            <div className="profileimage">
                <img src="./images/ravindra.jpg" alt="cover image not found" />
            </div>
            <div className="cameraicon">
             {/* <button className="cameraiconsize"><AddAPhotoIcon /> </button> */}
             <i className="fas fa-camera shift" style={{fontSize:"25px", color:"black",backgroundColor:"darkgray",cursor:"pointer",borderRadius:'10px'}}></i>
            </div>
            <div className="editcover">
                <button className="btncover"><i className="fas fa-camera shift" style={{fontSize:"25px"}}></i><span className="edit">Edit Cover Photo</span></button>
            </div>
        </div>
    );
}
export default Cover;