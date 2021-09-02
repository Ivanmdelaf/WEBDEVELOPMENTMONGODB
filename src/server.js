const express= require('express');
const path = require('path');

const config = require('./server/configure');
const app = express();

const app1 = config(app);

app1.listen(app.get('port'),()=>{
    console.log(`Server up: http://localhost:${app1.get('port')}`);
})

