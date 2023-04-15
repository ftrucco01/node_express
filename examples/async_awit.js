const orderProduct = (product) => {
    return new Promise( (resolve, reject) => {
        console.log('Ordering a product.');

        setTimeout( () => {
            if( product === 'cup' ){
                resolve('Ok, your is on stock!');
            }else{
                reject('The product is out stock');
            }
        }, 2000 );
    } );
};

const orderProcess = (response) => {
    return new Promise( (resolve ) => {
        console.log('Processing request..');
        console.log(`The answer is: ${response}`);

        setTimeout( () => {
            resolve('Thanks for your oder!!');
        }, 3000);
    });
};

orderProduct('cup').then( (response) => {
    return orderProcess(response);

}).then( (orderProcessMsg) => {
    console.log(orderProcessMsg);

} ).catch( (error) => {

    console.log( error );
} );


