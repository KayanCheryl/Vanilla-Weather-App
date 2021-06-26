function showTemperature(response){
    let currentTemperature=Math.round(response.data.main.temp)
    let temperatureElement= document.querySelector("#temperature")
    temperatureElement.innerHTML=`${currentTemperature}`;
}

let apiKey=`7d18e9a62c58e4e66a95783116ceb8e4`;
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=${apiKey}`

axios.get(apiUrl).then(showTemperature);