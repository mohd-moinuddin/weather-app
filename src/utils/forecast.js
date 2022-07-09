const { json } = require('body-parser');
const { response } = require('express');
const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url ="https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&appid=dece86c952be775c6f4b263dd57fbeab";
    request({url, json : true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect Weather App ! Please check your internet connection !", undefined);
        } else if (body.message) {
            callback("Unable to find Location !", undefined);
        } else {
            callback(undefined, "It is currently " + body.current.temp + " degree out ! and Weather is " + body.current.weather[0].main);
        }
    })
}


module.exports = forecast;


//const url ='https://api.openweathermap.org/data/2.5/onecall?lat=19.075983&lon=72.877655&appid=dece86c952be775c6f4b263dd57fbeab'