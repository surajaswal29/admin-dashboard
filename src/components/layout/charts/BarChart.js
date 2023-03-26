import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend} from "chart.js";

import {Bar} from "react-chartjs-2";
// import CompanyData from "../../../Data/data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend);

const BarChart = ({CompanyData}) => {

  const filteredData = new Set();
  const BarData = {};
  

  CompanyData.forEach(e=>{
    
    filteredData.add(e.relevance);
  })

  CompanyData.forEach(i=>{
    if(i.address === ""){
      BarData["Others"] = (BarData["Others"] || 0)+1;
    }else{
      BarData[i.address] = (BarData[i.address] || 0)+1;
    }
  });
  // console.log(filteredData);
  // console.log(BarData);

  // for(const [label,value] of Object.entries(BarData)){
  //     mainData.datasets.data.push(value);
  // }

  const mainData= {
    labels:[],
    datasets: [
      {
        label: 'Employee Address',
        data: [],
        backgroundColor:['#A0E4CB','#C6EBC5','#9ED5C5']
      }]
  };

  for(const p in BarData){
    mainData.labels.push(p);
    mainData.datasets[0].data.push(BarData[p]);
  }

  // console.log(mainData);
  return (
    <Bar data={mainData}/>
  )
}

export default BarChart