const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, content) => {
    if(err){
        throw err;
    }else{
        console.log(content);
    }
    console.log('Message');
});