import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const AllFoods = () => {
 const[foods,setFoods]=useState([]);
 useEffect(()=>{
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
  .then(res=>res.json())
  .then(data=>setFoods(data.meals))
  
 },[])

 
 return (
  
  <div>
  
   <div>
    {
     foods.map(food=><Food food={food}></Food>)
   }
   </div>
   <div>
    <h1>This is cart</h1>
   </div>
  </div>
 );
};

export default AllFoods;