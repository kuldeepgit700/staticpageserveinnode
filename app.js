const express = require('express');
const path = require('path');
const app = express();


const staticPath = path.join(__dirname, '/public');

 console.log(staticPath);

app.use(express.static(staticPath));

app.get('/', (req, res, next)=>{
   res.send('<h1>Hello world</h1>');
});


app.listen(2020, ()=>{
    console.log(`server is running on port: 2020`);
});