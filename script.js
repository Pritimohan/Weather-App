const apiKey = "5800fcc2a9c5cc7ea0a14a607d521f94";
const searchBox = document.querySelector("#searchbox");
const searchBtn = document.querySelector("#sbtn");
const tempBox = document.querySelector(".temp");
const otherDtls = document.querySelector(".othersDtls");
const weatherIcon = document.querySelector("#weathericon");
const windSpeed = document.querySelector("#windspeed");
const humidity = document.querySelector("#humidity");
const weathermood = document.querySelector("#weathermood");

searchBtn.addEventListener("click", () => {
  const city = document.querySelector("#searchbox").value;
  async function getWeather() {
    const rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await rawData.json();
    console.log(data);

    tempBox.innerHTML = `   
    <h1>${data.name}</h1>
    <p>${Math.round(data.main.temp)}°C</p>
    <p>Feel Like ${Math.round(data.main.feels_like)}°C</p>`;
    windSpeed.innerHTML = Math.round(data.wind.speed) + "km/h";
    humidity.innerHTML = Math.round(data.main.humidity) + "%";

    if (data.weather[0].main === "Clear") {
      weatherIcon.src = `icons/clear.png`;
      weathermood.innerHTML = data.weather[0].main;
    } 
    else if (data.weather[0].main === "Clouds") {
      weatherIcon.src = `icons/clouds.png`;
      weathermood.innerHTML = data.weather[0].main;
    } 
    else if (data.weather[0].main === "Rain") {
      weatherIcon.src = `icons/rain.png`;
      weathermood.innerHTML = data.weather[0].main;
    } 
    else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = `icons/drizzle.png`;
      weathermood.innerHTML = data.weather[0].main;
    }
     else if (data.weather[0].main === "Mist") {
      weatherIcon.src = `icons/mist.png`;
      weathermood.innerHTML = data.weather[0].main;
    } 
    else if (data.weather[0].main === "Haze") {
      weatherIcon.src = `icons/haze.png`;
      weathermood.innerHTML = data.weather[0].main;
    }
  }
  getWeather();
});
