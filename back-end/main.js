const express = require('express');
const route = require('./router/route.js');

async function initApplication() {
    const server = express();
    return new Promise(resolve=>{
        server.use("",route);
        server.listen(8080,'0.0.0.0',()=>{
            console.log(`Back-end server start!`);
            resolve(1);
        })
    })
}

initApplication().catch(err=>{
    console.log(err);
    process.exit(1);
})