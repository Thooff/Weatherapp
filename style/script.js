// ⏰Feature #1
// In your project, display the current date and time
let currentTime = new Date();

let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hour}:${minutes}`;

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

//🙀Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

function convert2Celsius(event) {
  event.preventDefault();
  let celsiusElement = document.querySelector("#temperature");
  celsiusElement.innerHTML = 3;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convert2Celsius);

function convert2Fahrenheit(event) {
  event.preventDefault();
  let fahrenheitElement = document.querySelector("#temperature");
  fahrenheitElement.innerHTML = 5;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convert2Fahrenheit);

// 👨‍🏫 Your task
// In your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.
// Please note: there's no need to include a temperature conversion at the moment. This will be taught later on in the course.

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#area");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-button");
searchForm.addEventListener("submit", searchCity);

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let p = document.querySelector("#temperature");
  p.innerHTML = `${temperature}`;
  let place = document.querySelector("#area");
  place.innerHTML = `${response.data.name}`;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

// 🙀 Bonus point:
// Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.my ApiKey = "ed200b1f3e2875868d69efc91168b048";
