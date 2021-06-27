let searchForm = document.querySelector("#form")

function showTemperature(response){
    let currentTemperature=Math.round(response.data.main.temp)
    let temperatureElement= document.querySelector("#temperature")
    temperatureElement.innerHTML=`${currentTemperature}`;
}

function showTemperatureFeelLike(response){
    let currentTemperatureFeelLike=Math.round(response.data.main.feels_like)
    let temperatureFeelLikeElement= document.querySelector("#temperatureFeelLike")
    temperatureFeelLikeElement.innerHTML=`${currentTemperatureFeelLike}`;
}

function showHumidity(response){
    let currentHumidity=response.data.main.humidity
    let humidityElement= document.querySelector("#humidity")
    humidityElement.innerHTML=`${currentHumidity}`;
}

function showWindSpeed(response){
    let currentWindSpeed=response.data.wind.speed
    let windSpeedElement= document.querySelector("#windSpeed")
    windSpeedElement.innerHTML=`${currentWindSpeed}`;
}

function showResult(){
    event.preventDefault();
    let countrySubmitted = document.querySelector("#location-input")
    let countryShown = document.querySelector("#place")
    let country = `${countrySubmitted.value}`
    countryShown.innerHTML =`${country}`
    let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(showTemperature);
    axios.get(apiUrl).then(showTemperatureFeelLike);
    axios.get(apiUrl).then(showHumidity);
    axios.get(apiUrl).then(showWindSpeed);
}

searchForm.addEventListener("submit", showResult)




let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=${apiKey}`

console.log(apiUrl)