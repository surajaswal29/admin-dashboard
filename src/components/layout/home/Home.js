import React, {useState, useEffect} from 'react';

// Charts and Graphs
import BarChart from '../charts/BarChart';
import DoughNut from "../charts/DoughNut";
// import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import SparkLinesCard from '../charts/SparkLinesCard';
import FeatureBox from './FeatureBox';
import TableBox from './TableBox';

// import CompanyData from "../../../Data/data.json";
import axios from "axios";
import Loader from "react-js-loader";
import {MAIN_URI} from "../../helper";


// Style file
import "./Home.css";



const Home = ({themeColor}) => {
const [CompanyData, setCompanyData] = useState();

 const getData = async ()=>{
    const {data} = await axios.get(`${MAIN_URI}/api/v1/readAll`);
    setCompanyData(data.employee);
    // console.log(data);
 }

  useEffect(() => {
       getData();
      
  },[]);
    
  return (
        <>
        {
            CompanyData ? (
                <>
                    <div className="row dashboard-main-container">
                        <div className="col-md-12 p-3">
                            <div className="row">
                                <div className="col-md-12 top-grid-wrapper">
                                    <SparkLinesCard cardID="1" headingData="₹20,000" innerTextData="Weekly Sale" themeColor={themeColor} mainSparkData={[5,10,6,8,9,20]} limit={5}/>
                                    <SparkLinesCard cardID="2" headingData="₹35,000" innerTextData="Monthly Sale" themeColor={themeColor} mainSparkData={[8,4,3,7,9,10]} limit={5}/>
                                    <SparkLinesCard cardID="3" headingData="10,000" innerTextData="New User" themeColor={themeColor} mainSparkData={[3,10,6,8,9,20]} limit={5}/>
                                    <SparkLinesCard cardID="4" headingData="40,000" innerTextData="Total User" themeColor={themeColor} mainSparkData={[7,10,6,8,9,20]} limit={5}/>
                                </div>
                                
                                {/* Feature Box component */}
                                <FeatureBox theme={themeColor}/>
                            </div>
                            <div className="row mt-4">
                                <div className={`col-md-5 pest-data pest-data-${themeColor}`}>
                                    <span>Employee Age Analytics</span>
                                    <div className={`doughnut-chart doughnut-chart-${themeColor} mt-2`}>
                                        <DoughNut CompanyData={CompanyData}/>
                                    </div>  
                                </div>
                                <div className={`col-md-7 pest-data pest-data-${themeColor}`}>
                                    <span>Employee Address Analytics</span>
                                    <div className={`bar-chart bar-chart-${themeColor} mt-2`}>                              
                                        <BarChart CompanyData={CompanyData}/>                               
                                    </div> 
                                </div>
                            </div>
                            <div className="row mt-4 mini-graph">
                                <div className={`col-md-6 pest-data pest-data-${themeColor}`}>
                                    <span>Employee Department</span>
                                    <div className='mini-chart mt-2'>
                                    <PieChart dataName="department" CompanyData={CompanyData}/>    
                                    </div>  
                                </div>
                                <div className={`col-md-6 pest-data pest-data-${themeColor}`}>
                                    <span>Employee Status</span>
                                    <div className='mini-chart mt-2'>                            
                                        <PieChart dataName="employeeStatus" CompanyData={CompanyData}/>                               
                                    </div> 
                                </div>                            
                            </div>
                            {/* <div className="row">
                                <div className="col-md-6">
                                    <LineChart year="start_year"/>
                                </div>
                                <div className="col-md-6">
                                    <LineChart year="end_year"/>
                                </div>
                            </div> */}
                            
                            <div className="row mt-4">
                                <div className={`col-md-12 pest-data pest-data-${themeColor}`}>
                                    <span>Data Table</span>
                                    <TableBox tableData={CompanyData}/>
                                    
                                </div>
                                <div className="col-md-12 pest-data footer-data bg-white py-2">
                                    <p className='text-dark text-center'>@ &copy; 2023 Dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </>
            ):(
                <div className='main-loader pr-center'>
                        <Loader type="bubble-scale" bgColor={"#995de8"} color={'#995de8'} size={100}/>
                </div>
            )
        }
        </>
        
  )
}

export default Home