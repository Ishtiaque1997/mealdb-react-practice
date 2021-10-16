import Button from '@restart/ui/esm/Button';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Card } from 'react-bootstrap';
import './Food.css';

// const element=(class) =>{
//    class='fas fa-coffee'
// }
// const element = <FontAwesomeIcon icon={faCoffee} />
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
    <Button onClick={()=>props.handleOrder(props.food)} variant="primary"bg="secondary"><i class="fas fa-coffee"></i>Order food</Button>
  </Card.Body>
</Card>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
  </div>
  
 );
};

export default Food;<h1>This is the food</h1>