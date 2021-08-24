const express= require('express');
const path = require('path');

//config = require('./server/configure');
const app = express();

app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,"views"));
//app = config(app);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(app.get('port'),()=>{
    console.log(`Server up: http://localhost:${app.get('port')}`);
})

