function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("city");
  temperatureElement.innerHTML = Mat.round(response.data.main.temp);
}

let apiKey = "f64789992dbed6d446cc845a3728146a";
let apiUrl =
  "api.openweathermap.org/data/2.5/weather?id=New York&appid={apiKey}&units=metric";

axios.get(apiUrl).then(displayTemperature);
