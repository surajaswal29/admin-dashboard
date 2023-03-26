import React from 'react';
import {CiDeliveryTruck, CiBeaker1,CiSettings, CiLocationOn, CiUser, CiAlignBottom, CiEdit, CiDollar, CiPercent, CiRead} from "react-icons/ci";

const FeatureBox = ({theme}) => {

// Feature Box Data
 const featureData = [
    {
        id:1,
        icon:<CiUser/>,
        text:'User',
    },
    {
        id:2,
        icon:<CiLocationOn/>,
        text:'Map',
    },
    {
        id:3,
        icon:<CiBeaker1/>,
        text:'Lab',
    },
    {
        id:4,
        icon:<CiDeliveryTruck/>,
        text:'Delivery',
    },

    {
        id:5,
        icon:<CiAlignBottom/>,
        text:'Charts',
    },
    {
        id:6,
        icon:<CiEdit/>,
        text:'Articles',
    },
    {
        id:7,
        icon:<CiDollar/>,
        text:'Payments',
    },
    {
        id:8,
        icon:<CiPercent/>,
        text:'Company',
    },
    {
        id:9,
        icon:<CiRead/>,
        text:'Ads',
    },
    {
        id:10,
        icon:<CiSettings/>,
        text:'Settings',
    },
 ];

  return ( 
    <div className="col-md-12 secondary-grid-wrapper">
        {
            
            featureData.map((data)=>(
                <div className={`feature-box feature-box-${theme} feature-box-${data.id}`} key={data.id}>
                    {data.icon}
                    <span className='mt-2'>{data.text}</span>
                </div>
            ))
            
        }
    </div>
  )
}

export default FeatureBox