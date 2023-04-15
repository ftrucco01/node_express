console.log('Starting..');

setImmediate( () => {
    console.log('Running the code after I/O events');
}, 1000);

console.log('Finished!');