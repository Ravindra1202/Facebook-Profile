import React from 'react';
import "./Managepost.css";

import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import ListIcon from '@material-ui/icons/List';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import { TabScrollButton } from '@material-ui/core';
function Managepost() {
    return (
        <div className="managepost">
        <div className="manage">
           <p className="hpost">Post</p>
           
           <span className="tune"><TuneRoundedIcon/></span>
           <p className="fil">Filter</p>
           <span className="tune"><SettingsSharpIcon/></span>
           <p className="sett"> Setting</p>

           </div> 
          
         <hr/>
           <div className="lise">
            <span className="tu"><ListIcon fontSize="large" style={{color:"blue" }}/></span>
           <p className="list">List</p>
           <span className="tu1"><AppsTwoToneIcon fontSize="large" /></span>
           <p className="grid"> Grid</p>
</div>

          <br/>  <br/> 
      </div>
    )
}

export default Managepost
