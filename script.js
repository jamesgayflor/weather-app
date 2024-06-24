let searchBtn = document.querySelector('#input-container');
let cityName = document.querySelector('#cityName');
let cityNameDisplay = document.querySelector('.cityNameDisplay');
let cityDes = document.querySelector('.cityDes');
let cityDate = document.querySelector('.cityDate');
let cityTemp = document.querySelector('.cityTemp');
let cityIcon = document.querySelector('.WeatherIcon');
let singleForecastContaier = document.querySelector('#singleCard');
let view_more_forecast_btn_section = document.querySelector('#display-12-btn-container');
const view_more_forecast_btn = document.querySelector('#display-12-btn');
const more_forecast_container_section = document.querySelector('#more-forcast-container');
let forecast_parent_container = document.querySelector('#forcast-parent-container');
// Date Months and Days of the year variables
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days_of_the_Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Event Caller
searchBtn.addEventListener('submit', e => {
    e.preventDefault();
    forecast_parent_container.innerHTML = '';
    // Current Weather Report (A day)
    fetch(`https://api.weatherapi.com/v1/current.json?key=82dcf5919a8f409fbee220445242306&q=${cityName.value}&aqi=no`)
        .then(city_response => city_response.json())
        .then(city_data => {
            cityNameDisplayValue = `${city_data.location.name}`;
            cityTempValue = `${city_data.current.temp_c}`;
            cityDesValue = `${city_data.current.condition.text}`;
            cityIconValue = `${city_data.current.condition.icon}`;

            // // Displaying Information from API in Browser

            cityNameDisplay.innerHTML = cityNameDisplayValue;
            cityTemp.innerHTML = cityTempValue;
            cityDes.innerHTML = cityDesValue;

            // Date inclusion
            date_value = new Date();
            cityDate.innerHTML = `Date: ${months[date_value.getMonth()]} ${date_value.getDate()}, ${date_value.getFullYear()}`;
            // Date Inclusion

            cityIcon.src = `https:${cityIconValue}`;
            singleForecastContaier.style.display = 'block';
            view_more_forecast_btn_section.style.display = 'block';
        })
        .catch(city_err => alert("Unknown Place!"));

});

// Function to show 12days forecast
view_more_forecast_btn.addEventListener('click', () => {
    more_forecast_container_section.style.display = 'block';
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=82dcf5919a8f409fbee220445242306&q=${cityName.value}&days=10&aqi=no&alerts=no`)
        .then(twelve_days_pull => twelve_days_pull.json())
        .then(days_pull_result => {
            let region_name = days_pull_result.location.name;
            let forecastdays = days_pull_result.forecast.forecastday;

            forecastdays.shift();
            forecastdays.forEach(day => {
                // console.log(day);
                // Date inclusion
                day_date = day.date;
                day_date2 = new Date(day_date);
                current_date = `Date: ${months[day_date2.getMonth()]} ${day_date2.getDate()}, ${day_date2.getFullYear()}`;

                html_template = `
                <div class="col-12 col-sm-4">
                    <div class="col-12 cardss">
                        <img src="${day.day.condition.icon}" class="WeatherIcon" alt="weather Icon">
                        <p class="card-text"><span class="cityTemp">${day.day.maxtemp_c}</span>°C</p>
                        <p class="card-text cityDes">${day.day.condition.text}</p>
                        
                        <p class="card-text cityDate">${current_date}</p>
                        <h4 class="card-title cityNameDisplay">${region_name}</h4>
                    </div>
                </div>
                `;

                forecast_parent_container.insertAdjacentHTML('beforeend', html_template);
            });
        })
        .catch(pull_err => alert("No pull results!"));
});