import EVCar from './100-evcar.js';
import Car from './10-car.js';

const tesla = new EVCar('Tesla', 'Electric', 'Red', '250');
const newCar = tesla.cloneCar();

console.log(newCar instanceof EVCar)
console.log(newCar instanceof Car)
