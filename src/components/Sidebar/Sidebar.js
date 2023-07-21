import React, { useState } from 'react'
import './Sidebar.css'
import { BsChevronLeft, BsChevronRight} from "react-icons/bs";
import SidebarList from './SidebarList.js';
import Home from '../Home/Home.js'

const Sidebar = ()=> {

  const [expandSidebar, setExpandSidebar] = useState(true);

  const handleExpandClick = ()=>{
    setExpandSidebar(!expandSidebar);
  }

    return (
    <div className="container-fluid sidebar-part">

      <div className={expandSidebar ? 'sidebar' : 'expand-sidebar'}>

        <div className='sidebar-icon'>
           <p onClick={handleExpandClick}>
            {expandSidebar ? <BsChevronRight size={30} /> : <BsChevronLeft size={30} /> }
            </p>
        </div>
        <SidebarList expandSidebar={expandSidebar}/>
      </div>

      <div className="container">
       <Home />
      </div>

    </div>
    
    )
}

export default Sidebar;