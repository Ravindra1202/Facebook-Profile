import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import GroupIcon from '@material-ui/icons/Group';
import VideocamIcon from '@material-ui/icons/Videocam';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownCircleSharpIcon from '@material-ui/icons/ArrowDropDownCircleSharp';
import OfflineBoltSharpIcon from '@material-ui/icons/OfflineBoltSharp';
import { IconButton } from '@material-ui/core';
const Header=()=>{
    return(
        <div className="header">  
        <div className="header_left">
            <img src="./images/fb_logo.jpg" alt="lfb_logo"></img>
            <div className="header_input">
                <SearchIcon />
                <input type="text" placeholder="SearchFacebook"></input>
            </div>
        </div>

        <div className="headermiddle">
        
            <div className="header_option">
            <HomeIcon fontSize="large"/>
            </div>
            <div className="header_option">
                <VideocamIcon fontSize="large"/>
            </div>
            <div className="header_option">
            <StorefrontIcon fontSize="large"/>
            </div>
            <div className="header_option">
            <GroupIcon fontSize="large"/>
            </div>
            <div className="header_option">
            <SportsEsportsIcon fontSize="large"/>
            </div>
        </div>


        <div className="headerright">
            <div className="headerrightimg">
                <img src="./images/ravindra.jpg" alt="missing"></img>
             <h4> &nbsp;&nbsp;&nbsp;Ravindra</h4>
             </div>
             {/* <IconButton>
             <AddIcon/>
             <NotificationsActiveIcon/>
             <OfflineBoltSharpIcon/>
             <ArrowDropDownCircleSharpIcon/>

             </IconButton> */}
             <div className="hright">
            <span className="hrighticon"><AddIcon/></span>
            <span className="hrighticon"><OfflineBoltSharpIcon/></span>
            <span className="hrighticon"><ArrowDropDownCircleSharpIcon/></span>
        
        </div>

        </div>

         
        </div>
          
    );
}

export default Header;
