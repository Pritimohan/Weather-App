const apiKey = "5800fcc2a9c5cc7ea0a14a607d521f94";
const city = "new york";
async function getWeather() {
  const rawData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await rawData.json();
  console.log(data);
  console.log(data.clouds.all);
}
getWeather();
