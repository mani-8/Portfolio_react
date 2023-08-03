import React from 'react'
import Profilepic from '../../Images/profile_boy.jpg'
import './SidebarList.css';
import { PiCertificateFill } from "react-icons/pi";
import { MdCastForEducation, MdBiotech } from "react-icons/md";
import { Link } from "react-scroll"

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
          <li className='nav-item'> 
          <Link
          to='home'
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
          >
          <FcHome size={25}/> Home 
          </Link>
          </li>
          <li className='nav-item'> 
          <Link
          to='about'
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
          >
          <FcVoicePresentation size={25}/> About 
          </Link>
          </li>
          <li className='nav-item'>
          <Link
          to='work-experience'
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
          >
          <FcFactory size={25}/> work Experience 
          </Link>    
          </li>
          <li className='nav-item'>
          <Link
          to='tech-stack'
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
          >
          <MdBiotech size={25}/> Tech Stack 
          </Link>
          </li>
          <li className='nav-item'>
          <Link
          to='education'
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
          >
          <MdCastForEducation size={25}/> Education
          </Link> 
          </li>
          <li className='nav-item'>
          <Link
          to='projects'
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
          >
          <FcTodoList size={25}/> Projects 
          </Link> 
          </li>
          <li className='nav-item'>
          <Link
          to='certifications'
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
          >
          <PiCertificateFill size={25}/> Certifications 
          </Link> 
          </li>
          <li className='nav-item'>
          <Link
          to='contact'
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
          >
          <FcContacts size={25}/> Contact
          </Link>  
          </li>      
       </ul>
      </div>
      
     
     )
     }
     
    </React.Fragment>
  )
}

export default SidebarList;