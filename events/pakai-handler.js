const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();

const makeCoffee = ( name ) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ( price ) => {
  console.log(`Total pembayaran: ${price} `);
}

const orderCoffeeListener = ({name, price}) => {
  makeCoffee(name);
  makeBill(price);
  console.log("lewat handler");
}

myEventEmitter.on('cofee-order-handler',orderCoffeeListener);

myEventEmitter.emit('cofee-order-handler',{
  name: 'Espresso',
  price: '25$'
});