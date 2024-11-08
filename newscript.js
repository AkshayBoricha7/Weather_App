const apiKey = "12ca327f8068202fab369b01646ec050";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.getElementById("city");
const weatherImage = document.getElementById("weather-icon");

async function weatherCheck(e) {
  e.preventDefault();
  let temperature = document.getElementById("temperature");
  let searchedCity = document.getElementById("searchCity").value;
  searchedCity =
    searchedCity[0].toUpperCase() + searchedCity.substr(1).toLowerCase();
  let response = await fetch(apiURL + searchedCity + `&appid=${apiKey}`);
  var data = await response.json();

  if (data.cod != 404) {
    weatherImage.style.display = "inline-block";
    temperature.innerHTML = Math.round(data.main.temp);
    city.innerHTML = searchedCity;

    switch (data.weather[0].main) {
      case "Clouds":
        weatherImage.src = "images/clouds.png";
        break;
      case "Clear":
        weatherImage.src = "images/clear.png";
        break;
      case "Rain":
        weatherImage.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherImage.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherImage.src = "images/mist.png";
        break;
    }
  } else {
    temperature.innerHTML = 0;
    city.innerHTML = searchedCity + " not found";
    weatherImage.style.display = "none";
  }
}

document.getElementById("button").addEventListener("click", (event) => {
  weatherCheck(event);
});
