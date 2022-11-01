const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
  console.log(`Total pembayaran: ${price} `);
}

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);

myEventEmitter.on('coffee-order', makeBill);

// Memicu event 'coffee-order' terjadi.
// tanpa menggunakan handler
myEventEmitter.emit('coffee-order', { 
  name: 'Tubruk',
  price: '20$'
});
// akhir tanpa menggunakan handler