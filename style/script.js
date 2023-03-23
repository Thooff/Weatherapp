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
