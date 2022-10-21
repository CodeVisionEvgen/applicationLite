const {Router} = require('express');
let Rout = Router();
Rout
    .get('/users/get',(req,res)=>{
        res.send('His')
    })

module.exports = Rout;