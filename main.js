const city = document.getElementById("city");
const form = document.getElementById("form");
const tempText = document.getElementById("temperature");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        `${city.value}` +
        "&APPID=148ffbfd3e481debec062bd19cd9505c&units=imperial"
    );
    const weatherData = await response.json();
    console.log(weatherData.main.feels_like);
    console.log(weatherData.main.humidity);
    console.log(weatherData.wind.speed);
    tempText.textContent = weatherData.main.temp + " F";
  } catch (error) {
    console.error("Error", error);
  }
});

//got the values from the weather API
//Just want to render them once the name of the city has been entered.

//part of the project to focus on: dynamically render a div when user submits a location
