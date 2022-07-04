const { response } = require('express');
const request = require('request');


const weatherURL = 'http://api.weatherstack.com/current?access_key=8e187bb7a3480df0435831105d7d51ca&query=39.8267,-122.4233'
const geocodeURL = 'http://api.ipstack.com/1000:4052:e15:f885:f834:25fc:4d49:ab4?access_key=a5554fc431358a018fb1ba414fea60b4&format=1'

request({ url: weatherURL, json: true }, (error, response) => {

    if(error){
        console.log('Error occured')
    }else if(response.body.error){
        console.log('unable to find location.')
    }else{ 
         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress.')

    }
    
})  


request({url:geocodeURL,json:true},(error,response)=>{
       
        if(error){
            console.log('Unable to connect with location services')
        }else if(response.body.location.length===0){
            console.log('unable to find location . Try another ')
        }else{
            const latitude = response.body.latitude
            const longitude = response.body.longitude
            console.log(latitude,longitude);}
})


