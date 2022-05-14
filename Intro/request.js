// install request module from node package manager
// this helps us to make requests to the server
const request = require('request');
//install jsdom module from npm
//jsdom helps us to select the dom

//if we send a function inside a function this is known as a call back function

request('http://www.google.com',cb);
//async request function with a callback
//when request is being made all the rest of the file is run then cb function id being called
function cb(error, response ,body){
    if(error)
    {
        console.log("error:",error);
    }
    else{
     console.log('body of google:',body); //return html of the site
    }
}
