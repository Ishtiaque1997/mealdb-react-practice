import React from 'react';
import { Card } from 'react-bootstrap';
import './Food.css'

const Food = (props) => {
 const{strMeal,strCategory,strArea,strMealThumb}=props.food;
 return (
  
    <div className='food-container'>
  <Card>
  
  <Card.Body>
    <Card.Title>{strMeal}</Card.Title>
    <img style={{height:'200px'}}src={strMealThumb} alt="" />
    <Card.Text>
     Category:{strCategory}
     <br />
     Region:{strArea}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
  
  </div>
 );
};

export default Food;<h1>This is the food</h1>