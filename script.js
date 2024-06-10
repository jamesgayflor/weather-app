let searchBtn = document.querySelector('#input-container');
let cityName = document.querySelector('#cityName');
let cityNameDisplay = document.querySelector('.cityNameDisplay');
let cityDes = document.querySelector('.cityDes');
let cityTemp = document.querySelector('.cityTemp');
let cityIcon = document.querySelector('.WeatherIcon');
let singleForecastContaier = document.querySelector('#singleCard');
// let viewMoreForecastBtn = document.querySelector('#viewMoreForecast');
// let viewMoreForecastContainer = document.querySelector('#more-forcast-container');

// API Key
let myAPIKey = '10718d7858a0613301b510f200a35240';

let keyValue = "dddd"
// Event Caller
searchBtn.addEventListener('submit', e => {
    e.preventDefault();
    // ---
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&appid=${myAPIKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        cityNameDisplayValue = `${data['name']}`;
        cityTempValue = `${data['main']['temp']}`;
        cityDesValue = `${data['weather'][0]['description']}`;
        cityIconValue = `https://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`;
        // Displaying Information from API in Browser
        cityNameDisplay.innerHTML = cityNameDisplayValue;
        cityTemp.innerHTML = cityTempValue;
        cityDes.innerHTML = cityDesValue;
        cityIcon.src = cityIconValue;
        singleForecastContaier.style.display = 'block';
    })
    .catch(err => alert("Unknown City!"));
});

// viewMoreForecastBtn.addEventListener('click', e => {
//     singleForecastContaier.style.display = 'none';
//     viewMoreForecastContainer.style.display = 'block';
// });