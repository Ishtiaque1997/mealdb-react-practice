import React from 'react';
import { Card } from 'react-bootstrap';
import './Food.css'

const Food = (props) => {
 const{strMeal,strCategory,strArea,strMealThumb}=props.food;
 return (
  
    <div className='food-container'>
  <Card>
  <Card.Header>Food name:{strMeal}</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <img src={strMealThumb} alt="" />
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
  
  </div>
 );
};

export default Food;<h1>This is the food</h1>