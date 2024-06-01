import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const dollar = new Currency('$', 'Dollars');
const price = new Pricing(100, dollar);
console.log(price.amount)
console.log(price.currency)
console.log(price.displayFullPrice())

