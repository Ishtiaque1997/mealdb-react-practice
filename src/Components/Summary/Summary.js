import React from 'react';

const Summary = (props) => {
 const{summary}=props;
 let names=[];
 for (const food of summary){
   names.push(food.strMeal)
 }
 // console.log(names)

 
 return (
  <div>
   <li>{names}</li>
   <h1>{summary.length}</h1>
   
   
  </div>
 );
};

export default Summary;