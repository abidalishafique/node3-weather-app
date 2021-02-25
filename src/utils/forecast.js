const request = require('request')


const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+ longitude+'&exclude=minutely&units=imperial&appid=deebbb7b781bfc1af6734055c70fb469'
    request({ url,json : true }, (error, {body}) => {
        if(error)
        {
            callback('Unable to access weather service...!',undefined)
        }
        else if(body.message)
        {
            callback('Unable to find location. Try another...!',undefined)
        }
        else
        {
            callback(undefined,'Daily Wind Speed : '+body.daily[0].wind_speed + ' . It is currently ' + body.current.temp + ' degrees out. There is a ' + body.current.weather[0].main + ' Weather')
        }   
    })
}

module.exports = forecast