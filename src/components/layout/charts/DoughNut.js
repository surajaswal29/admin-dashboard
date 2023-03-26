import React from 'react'

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import DonutChart from 'react-donut-chart';

// import CompanyData from "../../../Data/data.json";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughNut = ({CompanyData}) => {

    const donutData = {};
    const mainDonutData= [];
    const donutPieceColor = ['#AA77FF','#C9EEFF','#97DEFF','#62CDFF','#3E54AC','#7579E7','#B9FFFC','#9852F9','#C299FC'];

    // const label = new Set();

    CompanyData.forEach(i=>{
      if(i.age === ""){
        donutData["Others"] = (donutData["Others"] || 0)+1;
      }else{
        donutData[i.age] = (donutData[i.age] || 0)+1;
      }
    });

    // console.log(donutData);

    for(const [label,value] of Object.entries(donutData)){
      mainDonutData.push({
        value:value,
        label:label
      })
    }
  return (
    <DonutChart data={mainDonutData} clickToggle="false" colors={donutPieceColor} strokeColor="#fff"/>
  )
}

export default DoughNut