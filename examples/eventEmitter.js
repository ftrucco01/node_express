const EventEmitter = require('events');

const eventProducts = new EventEmitter();

eventProducts.on('buy', (number, price) => {
    console.log(`Product number ${number} has been buyed for ${price} USD`);
});

eventProducts.emit('buy', 500, 66);