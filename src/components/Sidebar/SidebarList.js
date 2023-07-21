import React from 'react'
import Profilepic from '../../Images/profile_boy.jpg'
import './SidebarList.css';
import { PiCertificateFill } from "react-icons/pi";
import { MdCastForEducation, MdBiotech } from "react-icons/md";

import { 
    FcHome,
    FcContacts,
    FcFactory ,
    FcVoicePresentation,
    FcTodoList
} from "react-icons/fc";

const SidebarList = ({expandSidebar}) => {
  return (
    <React.Fragment>

      {expandSidebar ? (
       <div className='collapse-navbar-items'>
        <ul>
          <li className='nav-item'> <FcHome size={25}/></li>
          <li className='nav-item'> <FcVoicePresentation size={25}/></li>
          <li className='nav-item'> <FcFactory size={25}/></li>
          <li className='nav-item'> <MdBiotech size={25} color='orange'/></li>
          <li className='nav-item'> <MdCastForEducation size={25} color='orange'/></li>
          <li className='nav-item'> <FcTodoList size={25}/></li>
          <li className='nav-item'> <PiCertificateFill size={25} color='orange'/></li>
          <li className='nav-item'> <FcContacts size={25}/></li>
          
        </ul>
       </div>) : 
      (
      <div className='navbar-items'>

       <div className='sidebarProfilePic'>
       <img src={Profilepic} alt="profile-pic"></img>
       </div>
       <ul>
          <li className='nav-item'> <FcHome size={25}/> Home </li>
          <li className='nav-item'> <FcVoicePresentation size={25}/> About </li>
          <li className='nav-item'> <FcFactory size={25}/> work Experience </li>
          <li className='nav-item'> <MdBiotech size={25}/> Tech Stack </li>
          <li className='nav-item'> <MdCastForEducation size={25}/> Education </li>
          <li className='nav-item'> <FcTodoList size={25}/> Projects </li>
          <li className='nav-item'> <PiCertificateFill size={25}/> Certifications </li>
          <li className='nav-item'> <FcContacts size={25}/> Contact </li>
          
       </ul>
      </div>
      
     
     )
     }
     
    </React.Fragment>
  )
}

export default SidebarList;