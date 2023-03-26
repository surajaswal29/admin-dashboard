import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart } from "react-google-charts";
// import CompanyData from "../../../Data/data.json";

// ChartJS.register(ArcElement, Tooltip, Legend);




const PieChart = ({CompanyData, dataName}) => {

    const donutData = {};
    const mainDonutData= [[dataName,'number']];
    // const donutPieceColor = ['#AA77FF','#C9EEFF','#97DEFF','#62CDFF','#3E54AC','#7579E7','#B9FFFC','#9852F9','#C299FC'];

    // const label = new Set();

    CompanyData.forEach(i=>{
      if(i[dataName] === ""){
        donutData["Others"] = (donutData["Others"] || 0)+1;
      }else{
        donutData[i[dataName]] = (donutData[i[dataName]] || 0)+1;
      }
    });

    // console.log(donutData);

    for(const [label,value] of Object.entries(donutData)){
      mainDonutData.push([
        label,
        value,
      ])
    }
    // console.log(mainDonutData);
  return (
    <Chart chartType="PieChart" data={mainDonutData} width={"100%"} height={"100%"}/>
  )
}

export default PieChart