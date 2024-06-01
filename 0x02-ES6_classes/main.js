import Car from './10-car';
import EVCar from './100-evcar';

const tesla = new EVCar('Tesla', 'Electric', 'Red', '250');
const newCar = tesla.cloneCar();

console.log(newCar instanceof EVCar);
console.log(newCar instanceof Car);
