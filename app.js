const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('hi there!!!');
});

app.listen(3000, (req,res)=>{
    console.log('Server is running on port = 3000! & you know what this is from login branch!!');
});