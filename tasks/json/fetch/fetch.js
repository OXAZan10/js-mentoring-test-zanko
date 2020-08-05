/**
 * 1. You need to make a GET request for the resource: https://jsonplaceholder.typicode.com/posts using fetch method
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://jsonplaceholder.typicode.com/posts')
.then ((response)=>{return response.json()})
.then((parsedJson)=>{
    let objectsToWrite = parsedJson.filter(post => post.id < 20);

    fs.writeFile('./response.json', JSON.stringify(objectsToWrite, null, " "), function(err){
        if (err) return console.log(err);  
    })
})
.catch((error)=> {
    console.log(error);
})
