const express = require('express');
const route = require('./router/route.js');

async function initApplication() {
    const server = express();
    return new Promise(resolve=>{
        server.use("/api",route);
        server.listen(4000,"0.0.0.0",()=>{
            console.log(`Back-end server start`);
            resolve();
        })
    })
}

initApplication().catch(err=>{
    console.log(err);
    process.exit(1);
})
// 'use strict';

// const express = require('express');

// // Constants
// const PORT = 4000;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(PORT, HOST, () => {
//   console.log(`Running on http://${HOST}:${PORT}`);
// });