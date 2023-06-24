const express = require('express');
const cors = require('cors');
const { LoginRouter } = require('./Router.js/Login');
const { connection } = require('./db');

const app = express();
app.use(cors())
app.use(express.json())

app.use('/login', LoginRouter)

app.listen(4200, async()=>{
        console.log('port is listing');
        await connection;
})