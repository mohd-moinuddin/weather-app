const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname,'/public')

app.use(express.static(publicDirectoryPath));


app.get('',(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


app.get('/help',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/help.html'))
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.get('/weather',(req,res)=>{
    res.send('<h1>Your weather </h1>')
})


app.listen(3000,()=>{
    console.log('Server is running on PORT');
})
