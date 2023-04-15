const orderStatus = () => {
    return Math.random() < 0.8;
};

const myOrder = new Promise( (resolve, reject) => {
    setTimeout( () => {
        if( orderStatus() == true ){
            resolve('Ok, your order is on way');
        }else{
            reject('Upss, any error occurs');
        }
    } ,3000);
});

const handleOrder = (confirmMsg) => {
    console.log(confirmMsg);
};

const rejectOrder = (msg) => {
    console.log(msg);
};

/**
 * catch method is responsible to call the error method handler
 * when any error occurs
 * 
 * Alternative way: myOrder.then( handleOrder, rejectOrder );
 */
myOrder.then( handleOrder ).catch( rejectOrder );