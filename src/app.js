const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname,'/public')

app.set('view engine','hbs');
app.use(express.static(publicDirectoryPath));


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name :'Moinuddin'
    })
})


app.get('/help',(req,res)=>{
    res.render('help',{
        title:'i am help',
        developer :'Moinuddin'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        developer :'Moinuddin'
    })
})

app.get('/weather',(req,res)=>{
    res.send('<h1>Your weather </h1>')
})


app.listen(3000,()=>{
    console.log('Server is running on PORT');
})
