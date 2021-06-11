import React from 'react';
import "./Header2.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Header2 = () => {
    return (
        <div className="headersection">
            <div className="heder_left">
                <div className="hederpart">
                    <h4>Post</h4>
                </div>
                <div className="hederpart">
                    <h4>About</h4>
                </div>
                <div className="hederpart">
                    <h4>Friends 744</h4>
                </div>
                <div className="hederpart">
                    <h4>Photos</h4>
                </div>
                <div className="hederpart">
                    <h4>Story Archive</h4>
                </div>
                <div className="hederpart">
                    <h4>More</h4>
                    <ExpandMoreIcon />
                </div>
            </div>

            <div className="heder_right">
                <div className="addToStory">
                    <AddIcon />
                    <h5>Add to Story</h5>
                </div>
                <div className="editProfile">
                    <CreateIcon />
                    <h5>Edit Profile</h5>
                </div>
                <div className="more">
                    <MoreHorizIcon />
                </div>
            </div>

        </div>
    );
}
export default Header2;