import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Summary from '../Summary/Summary';
import './AllFoods.css'

const AllFoods = () => {
 const[foods,setFoods]=useState([]);
 const[summary,setSummary]=useState([])
 useEffect(()=>{
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
  .then(res=>res.json())
  .then(data=>setFoods(data.meals))
  
 },[])
 const handleOrder=(food)=>{
  const newSummary=[...summary,food];
  setSummary(newSummary);
 }

 
 return (
  
  <div className='all-container'>
  
   <div>
    {
     foods.map(food=><Food 
      food={food}
      handleOrder={handleOrder}
      ></Food>)
   }
   </div>
   <div>
    <Summary summary={summary}></Summary>
   </div>
  </div>
 );
};

export default AllFoods;