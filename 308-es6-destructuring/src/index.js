// CHALLENGE: uncomment the code below and see the car stats rendered
import React, { use } from "react";
import ReactDOM from "react-dom";
import animals, {useAnimals} from "./data";
import cars from "./practice";

// const [cat, dog] = animals; //destructuring an array

// const {name, sound} = cat; //destructuring an object. Names must match the key

// const {name = "Fluffy", sound = "Purr"} = cat; //default values

//const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

const [honda, tesla] = cars;

const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;

const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;

 ReactDOM.render(
  <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
    </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
    </tr>
     <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
     </tr>
   </table>,
   document.getElementById("root")
 );
