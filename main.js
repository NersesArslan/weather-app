const city = document.getElementById("city");
const form = document.getElementById("form");

const searchResult = document.querySelector(".search-result");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        `${city.value}` +
        "&APPID=148ffbfd3e481debec062bd19cd9505c&units=imperial"
    );
    const weatherData = await response.json();
    searchResult.classList = "active";
    cityName.textContent = `${city.value}`;
    temperature.textContent = `${weatherData.main.temp} Fahrenheit`;
    feelsLike.textContent = `Feels like ${weatherData.main.feels_like} Fahrenheit`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    wind.textContent = `Wind: ${weatherData.wind.speed} mph`;
  } catch (error) {
    console.error("Error", error);
  }
});

//got the values from the weather API
//Just want to render them once the name of the city has been entered.

//part of the project to focus on: dynamically render a div when user submis
