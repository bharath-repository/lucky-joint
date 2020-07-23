const path = require("path");
const express = require('express');
const app = express();

app.use('/home', express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
    res.sendFile('/home/knight/git/lucky-joint/public/index.html')
});

app.listen(3000, (req,res)=>{
    console.log('Server is running on port = 3000! & you know what this is from login branch!!');
});