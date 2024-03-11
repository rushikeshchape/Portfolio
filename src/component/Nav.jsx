import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InsightsIcon from '@mui/icons-material/Insights';
import './css/nav.css'
const Nav = () => {
  return (
    <>
      <div className="nav_main">
        <div className="logo"><NavLink exact activeclassName="active_class" to="/" className="navlink">RC
          </NavLink></div>
        <div className="nav_links">
          <NavLink exact activeclassName="active_class" to="/" className="navlink">
           <HomeIcon className='navicon'/>  Home
          </NavLink>
          <NavLink exact activeclassName="active_class" to="/about" className="navlink">
           <PersonIcon className='navicon'/>  About
          </NavLink>
          <NavLink exact activeclassName="active_class" to="/projects" className="navlink">
            <InsightsIcon className='navicon'/>  Projects
          </NavLink>
          <NavLink exact activeclassName="active_class" to="/contact" className="navlink">
            <EmailIcon className='navicon'/> ContactMe
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
