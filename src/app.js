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

let apiKey = "f64789992dbed6d446cc845a3728146a";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}k&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement.value);
}

let form = document.querySelector("search-form");
form.addEventListener("submit", search);
