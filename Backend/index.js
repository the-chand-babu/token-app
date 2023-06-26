const express = require('express');
const cors = require('cors');
const { user_Router } = require('./Router/user_data');
const { connection } = require('./db');

const app = express();
app.use(cors())
app.use(express.json())

app.use('/user', user_Router)

app.listen(4200, async()=>{
        console.log('port is listing');
        await connection;
})