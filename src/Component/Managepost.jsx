import React from 'react';
import "./Managepost.css";
import TuneIcon from "@material-ui/icons/Tune";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardSharpIcon from "@material-ui/icons/DashboardSharp";
function Managepost() {
  return (
    <div className="managepost">
      <div className="mgpost">
        <h3>Posts</h3>
      </div>
      <div className="manageView">
        <div className="manageFilter">
          <TuneIcon fontSize="small" />
          <p>Filters</p>
        </div>
        <div className="manageseting">
          <SettingsIcon fontSize="small" />
          <p>Manage posts</p>
        </div>
      </div>
      <hr />

      <div className="postViewMethod">
        <div className="listView">
          <MenuIcon fontSize="small" />
          <p>List View</p>
        </div>
        <div className="gridView">
          <DashboardSharpIcon fontSize="small" />
          <p>Grid view</p>
        </div>
      </div>

      
    </div >
  )
}

export default Managepost
