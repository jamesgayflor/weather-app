// const myApiKey = '10718d7858a0613301b510f200a35240';

// // fetching reports for forecast for in an hour

// const apiCallLink = `ttps://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${myApiKey}`;

// fetch(apiCallLink)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => {
//         console.log(`Error: ${error}`);
//     })

let submitBtn = document.querySelector('#input-container');
let cityName = document.querySelector('#cityName');
let cityNameDisplay = document.querySelector('.cityNameDisplay');
let cityDes = document.querySelector('.cityDes');
let cityTemp = document.querySelector('.cityTemp');
let cityIcon = document.querySelector('#cityIcon');

// API Key
let myAPIKey = '10718d7858a0613301b510f200a35240';

submitBtn.addEventListener('submit', e => {
    e.preventDefault();
    // ---
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${myAPIKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cityNameDisplayValue = `${data['name']}`;
        cityTempValue = `${data['main']['temp']}`;
        cityDesValue = `${data['weather'][0]['description']}`;
        cityIconValue = `https://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`;
        // Displaying Information from API in Browser
        cityNameDisplay.innerHTML = cityNameDisplayValue;
        cityTemp.innerHTML = cityTempValue;
        cityDes.innerHTML = cityDesValue;
        cityIcon.src = cityIconValue;
    })
    .catch(err => alert("Unknown City!"));
})