import React, {useEffect, useState} from 'react';
import axios from 'axios';

import UserIcon from "../../../images/user-icon.png";
import MapBox from './MapBox';
import { MAIN_URI } from '../../helper';

const EmployeeModal = ({refHandle, dataId}) => {

  // employee data fetched by API
  const [empData, setEmpData]=useState();

  // closing the popup modal on outside click
    const closeModal = (e)=>{
        e.preventDefault();
        e.target.classList.remove('show-modal');
        
    }

    useEffect(() => {
      // calling get single user API
      const loadData = async ()=>{
        const {data} = await axios.get(`${MAIN_URI}/api/v1/read/${dataId}`);
        // console.log(data);
        setEmpData(data.employee);
      }
  
      // only call loadData() when dataId id loaded or completely setup
      if(dataId){
        loadData();
      }
    }, [dataId])
    
  return (
    <>
      <div className='main-wrap' ref={refHandle} onClick={(e)=>closeModal(e)}>
        <div className='inner-box p-3'>
          {
          !empData?(
          <div>...loading</div>
          ):(
              <>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="user-card">
                          <div className="user-card-img">
                            <img src={UserIcon} alt="user icon"/>
                          </div>
                          <div className="about-user text-center">
                            <span>{empData.employeeName}</span>
                            <span>Age: {empData.age}</span>
                            <span>Department: {empData.department}</span>
                            <span>Status: {empData.employeeStatus}</span>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className='bg-info text-white p-2 rounded'>
                        <h5 className='my-1'>Address</h5>
                        <span className='text-white'>{empData.address}</span>
                      </div>
                      <MapBox locationData={empData.address}/>
                    </div>
                  </div>
              </>
        )
        }
              </div>
          </div>
    </>
  )
}

export default EmployeeModal