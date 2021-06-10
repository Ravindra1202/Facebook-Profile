import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';
import "./Intro.css";

const Intro = () => {
    return (
        <div className="introduction">
            


                <span className="intro"><h2>Intro</h2></span><br />
                <span className="intro"><WorkOutlinedIcon className="ic" /> &nbsp;&nbsp; ESCALE Solution PVT.<br/> LTD</span><br /> 
                <span className="intro"><LocationOnIcon /> &nbsp;&nbsp; From Varanasi</span><br />
                <span className="intro"><FavoriteIcon />  &nbsp;&nbsp;Single</span><br /> 
                <span className="intro"><HomeIcon /> &nbsp;&nbsp; Live in Varanasi</span><br /> 
                <span className="intro"><WatchLaterIcon />&nbsp;&nbsp; Joined on June 2012</span><br /> 
                <span className="intro"><RssFeedIcon />&nbsp;&nbsp; Followed By 100 People</span><br /> <br />

                <div className="profilesocial">
                    <img src="/images/instagram.png" alt=""></img><p>star_ravindra_vns</p>
                    <img src="/images/twitter.png" alt=""></img><p>BrightMoon12298</p> 
                    <img src="/images/linked.png" alt=""></img><p>https://www.linkedin.com/in/<br/>ravindra-patel-557053164</p><br/><br/>
                    
                </div>
                <div className="edit">
               <p>Edit Profile</p>
               <p>Add Hobbies</p>
               <p>Add Featured</p>
                &nbsp; 
                </div>
          </div>
              
    );
}
export default Intro;