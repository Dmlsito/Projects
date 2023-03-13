const closeIconSearch = document.querySelector(".principal-info-weather-data__search__icon");
const search = document.querySelector(".principal-info-weather-data__search");
const cardMainWeather = document.querySelector(".principal-info-weather-data__info");
const btnSearch = document.querySelector(".principal-info-weather-data__info-btnSearch");
const searhInput = document.getElementById("searchInput");
const mainBtnSearch = document.getElementById("mainButton")


const showInfo = (data) => {
 
    if(data.current.weather[0].main === "Rain" && data.current.weather[0].description === "light rain"){
      document.getElementById("weather-image").src = "images/LightRain.png"
    }
    if(data.current.weather[0].main === "Rain") {
      document.getElementById("weather-image").src = "images/ModerateRain.png"
    }
    if(data.current.weather[0].main === "Rain" && data.current.weather[0].description === "very heavy rain"){
      document.getElementById("weather-image").src = "images/HeavyRain.png"
    }
    if(data.current.weather[0].main === "Rain" && data.current.weather[0].description === "freezing rain"){
      document.getElementById("weather-image").src = "images/Sleet.png"
    }
    if(data.current.weather[0].main === "Snow"){
      document.getElementById("weather-image").src = "images/Snow.png"
    }
    if(data.current.weather[0].main === "Clouds" && data.current.weather[0].description === "few clouds"){
      document.getElementById("weather-image").src = "images/LightCloud.png"
    }
    if(data.current.weather[0].main === "Clouds" && data.current.weather[0].description === "scattered clouds"){
      document.getElementById("weather-image").src = "images/scattered.png"
    }
    if(data.current.weather[0].main === "Clouds" && data.current.weather[0].description === "overcast clouds"){
      document.getElementById("weather-image").src = "images/HeavyCloud.png"
    }
    if(data.current.weather[0].main === "Clouds" && data.current.weather[0].description === "broken clouds"){
      document.getElementById("weather-image").src = "images/Broken clouds.png"
    }
    if(data.current.weather[0].main === "Clear"){
      document.getElementById("weather-image").src = "images/Clear.png"
    }
    if(data.current.weather[0].main === "Mist"){
      document.getElementById("weather-image").src = "images/mist.png"
    }
    if(data.current.weather[0].main === "Thunderstorm"){
      document.getElementById("weather-image").src = "images/Thunderstorm.png"
    }
    document.getElementById("temperature").textContent = Math.trunc(data.current.temp) + " °C"
  }

//Method to get the data
const getData = () => {
  
  cardMainWeather.style.display = "flex";
  search.style.display = "none";
  
  let latitude;
  let longitude;

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value}&appid=9a81ed26c2118da6383448260eeacebe`)
    .then(res => res.json())
    .then(res => {
      //This data is very important to search the weather in each city
     latitude = res[0].lat;
     longitude = res[0].lon;
     
     fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=9a81ed26c2118da6383448260eeacebe`)
     .then(res => res.json())
     .then(res => {
      showInfo(res);
      console.log(res)})
    })
}


closeIconSearch.addEventListener("click", () => {
  cardMainWeather.style.display = "flex";
  search.style.display = "none";

})

btnSearch.addEventListener("click", () => {
   cardMainWeather.style.display = "none";
   search.style.display = "flex";
})
mainButton.addEventListener("click", getData);



