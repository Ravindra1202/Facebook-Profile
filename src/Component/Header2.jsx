import React from 'react'
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownCircleSharpIcon from '@material-ui/icons/ArrowDropDownCircleSharp';
import AddIcon from '@material-ui/icons/Add';
// import CreateIcon from '@material-ui/icons/Create';

const Header2=()=>{
    return(
        <div className="header2">
            <div className="headercontent">
            <p>Post</p>
            <p>About</p>
            <p>friends 745</p>
            <p>Photos</p>
            <p>Story Archive</p>
            <p>More  <ArrowDropDownCircleSharpIcon fontSize="small"/></p>
            </div>

            <div className="but">
                <button className="bt"><AddIcon/> Add to story</button>
                <button className="bt"><CreateIcon/> Edit Profile</button>
                <button className="btf">...</button>
            </div>
        </div>
    );
}
export default Header2;