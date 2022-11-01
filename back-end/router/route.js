const {Router} = require('express');
let Rout = Router();
Rout
    .get('/',(req,res)=>{
        res.json({
            hi: "Hello"
        });
console.log(`send`)
    })
    .get('/test',(req,res)=>{
        res.json({
            hi: "hello"
        })
console.log(`send`)
    })

module.exports = Rout;