const fs = require('fs');

console.log('before');
//let content = fs.readFileSync("request.js"); synchronous

fs.readFile("request.js",cb);//asynchronous function 1.first all the file is run then call back is called

function cb(error,data){
    console.log(data+"");
}


//console.log(content+"");
console.log('after');
console.log('after');
console.log('after');
console.log('after');
console.log('after');
console.log('after');

