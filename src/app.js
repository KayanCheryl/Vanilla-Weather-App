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


if(currentHour<5){
    greeting.innerHTML=`Good Night`
}
else if(currentHour <12){
    greeting.innerHTML=`Good Morning`
}else if(currentHour <=17){
    greeting.innerHTML=`Good Afternoon`
}else if(currentHour <=19){
    greeting.innerHTML=`Good Evening`
}else if(currentHour<=24 ){
    greeting.innerHTML=`Good Night`
}
}


//Searching engine and show celcius result

let searchForm = document.querySelector("#form")

function showIcon(response){
    let currentIcon=response.data.weather[0].icon
    let iconElement= document.querySelector("#icon")
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${currentIcon}@2x.png`)
}

function getForecast(coordinates){
   console.log(coordinates);
    let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(displayForecast)
   console.log(apiUrl)
   displayForecast();
}

function showTemperature(response){
    let currentTemperature=Math.round(response.data.main.temp)
    let temperatureElement= document.querySelector("#temperature")
    temperatureElement.innerHTML=`${currentTemperature}`;
    getForecast(response.data.coord);
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

function showDescription(response){
    let currentDescription=response.data.weather[0].description
    let descriptionElement= document.querySelector("#description")
    descriptionElement.innerHTML=`${currentDescription}`;
}


function showResult(){
    event.preventDefault();
    let countrySubmitted = document.querySelector("#location-input")
    let countryShown = document.querySelector("#place")
    country = `${countrySubmitted.value}`
    countryShown.innerHTML =`${country}`
    let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`
     axios.get(apiUrl).then(showIcon);
    axios.get(apiUrl).then(showTemperature);
    axios.get(apiUrl).then(showTemperatureFeelLike);
    axios.get(apiUrl).then(showHumidity);
    axios.get(apiUrl).then(showWindSpeed);
    axios.get(apiUrl).then(showDescription);
    axios.get(apiUrl).then(showTime);
}

searchForm.addEventListener("submit", showResult)



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
    axios.get(apiUrl).then(showIcon);
    axios.get(apiUrl).then(showTemperature);
    axios.get(apiUrl).then(showTemperatureFeelLike);
    axios.get(apiUrl).then(showHumidity);
    axios.get(apiUrl).then(showWindSpeed);
    axios.get(apiUrl).then(showDescription);
    axios.get(apiUrl).then(showTime);
}


//Forecast 
function displayForecast(response) {
  let forecast= response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];

function formatDay (timestamp){
    let date= new Date(timestamp * 1000);
    let day =date.getDay();
    let days=["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

    return days[day];
}
  let forecastRow = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
      if (index<6){
    forecastRow =
      forecastRow +
      `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(forecastDay.temp.max)}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(forecastDay.temp.min)}° </span>
        </div>
      </div>
  `;}
  });

  forecastRow = forecastRow + `</div>`;
  forecastElement.innerHTML = forecastRow;
}


let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&units=metric&appid=${apiKey}`

