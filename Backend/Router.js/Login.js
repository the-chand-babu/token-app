const express = require('express');


const LoginRouter = express.Router();




LoginRouter.post('/',(req,res)=>{
            console.log(req.body);
            res.send({messgae:"done"})
})


module.exports ={LoginRouter}