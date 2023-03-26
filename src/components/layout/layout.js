import React, {useRef,useState} from 'react';

// import {Outlet} from "react-router-dom";
import SideBar from "../layout/Sidebar/SideBar";

// import {FaUserAlt} from "react-icons/fa";
import {MdNotifications, MdKeyboardArrowDown, MdLightMode,MdDarkMode} from "react-icons/md";
import {TbWorld} from "react-icons/tb";

import UserImage from "../../images/user-icon.png";

import "../layout/Layout.css";
import Home from './home/Home';

const Layout = () => {


  const [themeStatus, setThemeStatus] = useState(0);
  const [themeBg, setThemeBg] = useState('light');

  const themeMode = useRef(null);
//   const showDrop = useRef([]);
//   console.log(showDrop);
  const themeSetter = (e)=>{
    e.preventDefault();

    if(themeStatus === 0){
        setThemeStatus(1)
        setThemeBg("dark");
        console.log(themeMode);
    }else{
        setThemeStatus(0)
        setThemeBg("light");
    }
  }

//   useEffect(() => {
//     showDrop.current.forEach(i => {
//         i.addEventListener('click',(e)=>{
    
//             showDrop.current.classList.toggle('lang-dropdown-show');
//             console.log('English');
//         });
//       });
//   }, [showDrop])
  

//   const chooseLang = (e)=>{
//     e.preventDefault(e);

//     showDrop.current.classList.toggle('lang-dropdown-show');
//     console.log('English');
//   }
  
  return (
    <div className={`container-fluid dashboard-bg-${themeBg} vh-100`} ref={themeMode}>
        <div className="row">
            <div className={`col-md-2 dashboard-header-bg-${themeBg}`}>
                <SideBar themeColor={themeBg}/>
            </div>
            <div className="col-md-10">
                <div className={`row dashboard-header-bg-${themeBg}`}>
                    <div className="col-md-4 py-3 only-mobile">
                        <h4>Admin</h4>
                    </div>
                    <div className="col-md-8 pr-center py-3 justify-content-end user-panel only-mobile">
                        <MdNotifications/>
                        <div className="db-language pr-center mx-lg-4" >
                            <TbWorld/>&nbsp;
                            <span>English</span>&nbsp;
                            <MdKeyboardArrowDown/>
                            <div className='lang-dropdown' > {/*ref={element => showDrop.current.push(element)}*/}
                                <a href='http://localhost:3000'>हिंदी</a>
                                <a href='http://localhost:3000'>English</a>
                            </div>
                        </div>
                        <div className="theme-mode mx-2">
                            <div onClick={(e)=>themeSetter(e)} className={`icon-color-${themeBg}`}>
                                {themeStatus === 0?(<MdDarkMode/>):(<MdLightMode/>)}
                            </div>
                            
                        </div>
                        <div className="user-avatar-box pr-center mx-lg-2">
                           <div className="user-img">
                             <img src={UserImage} alt="User Icon"/>
                           </div>&nbsp;
                           <span>Suraj Aswal</span>
                        </div>
                        
                    </div>
                    <div className="col-md-8 show-only-mobile py-3 user-panel">
                        <div className="user-avatar-box pr-center mx-lg-2">
                            <div className="user-img">
                                <img src={UserImage} alt="User Icon"/>
                            </div>&nbsp;
                            <span>Suraj Aswal</span>
                        </div>
                        <div className='mobile-util-box pr-center'>
                            <MdNotifications/>
                            <div className="db-language pr-center mx-2 mx-lg-4" >
                                <TbWorld/>&nbsp;
                                <span>English</span>&nbsp;
                                <MdKeyboardArrowDown/>
                                <div className='lang-dropdown' >{/*ref={element => showDrop.current.push(element)}*/}
                                    <a href='http://localhost:3000'>हिंदी</a>
                                    <a href='http://localhost:3000'>English</a>
                                </div>
                            </div>
                            <div className="theme-mode mx-2">
                                <div onClick={(e)=>themeSetter(e)} className={`icon-color-${themeBg}`}>
                                    {themeStatus === 0?(<MdDarkMode/>):(<MdLightMode/>)}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Home themeColor={themeBg}/>
            </div>
        </div>
    </div>
  )
}

export default Layout