//Date and Time (Time zone matters' are not yet included)
//Week
function showTime(){
let currentWeek = document.querySelector("#week");

let current = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[current.getDay()];
currentDay=currentDay.toUpperCase();

currentWeek.innerHTML=`${currentDay}`

//Greeting 
let greeting = document.querySelector("#greeting");

let currentHour = current.getHours();

console.log(currentHour)

if(currentHour >=5 || currentHour <12){
    greeting.innerHTML=`Good Morning`
}else if(currentHour >=12 || currentHour<17){
    greeting.innerHTML=`Good Afternoon`
}else if(currentHour >=17 || currentHour<=19){
    greeting.innerHTML=`Good Evening`
}else if(currentHour >19 || currentHour <5 ){
    greeting.innerHTML=`Good Night`
}
}


//Searching engine and show celcius result

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
    country = `${countrySubmitted.value}`
    countryShown.innerHTML =`${country}`
    let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(showTemperature);
    axios.get(apiUrl).then(showTemperatureFeelLike);
    axios.get(apiUrl).then(showHumidity);
    axios.get(apiUrl).then(showWindSpeed);
    axios.get(apiUrl).then(showTime);
}

searchForm.addEventListener("submit", showResult)

//Convert to Fahrenheit

function convertingToFahrenheit(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature")
    let fahrenheitTemperature = Math.round((temperatureElement.innerHTML*9)/5+32)
    temperatureElement.innerHTML = fahrenheitTemperature
    fahrenheitButton.classList.add("active")
    celciusButton.classList.remove("active")
    }

fahrenheitButton.addEventListener("click", convertingToFahrenheit)

//Convert to Celcius 

function convertingToCelcius(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature")
    let celciusTemperature = Math.round((temperatureElement.innerHTML-32)*5/9)
    temperatureElement.innerHTML = celciusTemperature
    fahrenheitButton.classList.remove("active")
    celciusButton.classList.add("active")
}
    
    celciusButton.addEventListener("click", convertingToCelcius)

//Original 
showTime();
showCurrentResult();

function showCurrentResult(){
    let countrySubmitted = document.querySelector("#location-input")
    let countryShown = document.querySelector("#place")
    country = `Hong Kong`
    countryShown.innerHTML =`${country}`
    let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(showTemperature);
    axios.get(apiUrl).then(showTemperatureFeelLike);
    axios.get(apiUrl).then(showHumidity);
    axios.get(apiUrl).then(showWindSpeed);
    axios.get(apiUrl).then(showTime);
}





let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&units=metric&appid=${apiKey}`

console.log(apiUrl)