import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import CompanyData from "../../../Data/data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend);



const LineChart = ({year}) => {

  const filteredData = new Set();
  const BarData = {};
  

  CompanyData.forEach(e=>{
    
    filteredData.add(e[year]);
  })

  CompanyData.forEach(i=>{
    if(i[year] === ""){
      BarData["Others"] = (BarData["Others"] || 0)+1;
    }else{
      BarData[i[year]] = (BarData[i[year]] || 0)+1;
    }
  });

  const mainData= {
    labels:[],
    datasets: [
      {
        fill:true,
        label: year,
        data: [],
        borderColor:year === "end_year"?'#8F43EE':'#62CDFF',
        backgroundColor: year === "end_year"?'#8F43EE':'#C9EEFF'
      }]
  };

  for(const p in BarData){
    mainData.labels.push(p);
    mainData.datasets[0].data.push(BarData[p]);
  }

  console.log(mainData);
  return (
    <Line data={mainData}/>
  )
}

export default LineChart