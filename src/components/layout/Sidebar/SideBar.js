import React, { useRef } from 'react'

// React Icons
import {RxDashboard} from "react-icons/rx";
import {MdDashboardCustomize, MdCalendarToday, MdOutlineTopic, MdPieChart, MdBarChart,MdSource,MdOutlineFlag,MdOutlineSettings, MdEdit} from "react-icons/md";
import {AiOutlineAreaChart, AiOutlineMenu} from "react-icons/ai";

import "./sidebar.css";



const SideBar = ({themeColor}) => {
    const mobileSidebarNav = useRef(null);

    const mobileMenuShow = (e)=>{
        e.preventDefault();

        mobileSidebarNav.current.classList.toggle('dashboard-sidebar-nav-show');

    }
  return (
    <div className='dashboard-sidebar vh-md-100'>
        <div className="row">
            <div className="col-md-12 py-3 mobile-sidebar-nav">
                <div className='dashboard-logo pr-center'>
                    <RxDashboard/>
                    &nbsp;<span>My<strong className='dash-logo-color'>Dashboard</strong></span>
                </div>
                <div className='ham-btn' onClick={(e)=>mobileMenuShow(e)}>
                    <AiOutlineMenu/>
                </div>
            </div>
            <div className={`col-md-12 dashboard-sidebar-nav dashboard-sidebar-nav-${themeColor}`} ref={mobileSidebarNav}>
                <ul className='navbar'>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdDashboardCustomize/> &nbsp; &nbsp;<span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdCalendarToday/> &nbsp; &nbsp;<span>Employee Profile</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdOutlineTopic/> &nbsp; &nbsp;<span>Departments</span>
                        </a>
                    </li>   
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdPieChart/> &nbsp; &nbsp;<span>Company</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdEdit/> &nbsp; &nbsp;<span>My Learning</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdBarChart/> &nbsp; &nbsp;<span>Complaints</span>
                        </a>
                    </li> 
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdSource/> &nbsp; &nbsp;<span>Finance</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><AiOutlineAreaChart/> &nbsp; &nbsp;<span>Attendance</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdOutlineFlag/> &nbsp; &nbsp;<span>Country</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdOutlineSettings/> &nbsp; &nbsp;<span>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar