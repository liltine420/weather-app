function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Mat.round(response.data.main.temp);
  cityElement.innerHTML = Mat.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("city-input");
  console.log(cityInputElement);
}

function search(city) {
  let apiKey = "f64789992dbed6d446cc845a3728146a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}k&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFarenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  farenheitLink.classList.add("active");
  let farenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(farenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  farenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);

let farenheitLink = document.querySelector("farenheit-link");
farenheitLink.addEventListener("click", displayFarenheitTemperature);

let celsiusLink = document.querySelector("celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("New York");
