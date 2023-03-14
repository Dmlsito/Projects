const closeIconSearch = document.querySelector(".principal-info-weather-data__search__icon");
const search = document.querySelector(".principal-info-weather-data__search");
const cardMainWeather = document.querySelector(".principal-info-weather-data__info");
const btnSearch = document.querySelector(".principal-info-weather-data__info-btnSearch");
const searhInput = document.getElementById("searchInput");
const mainBtnSearch = document.getElementById("mainButton")
const btnLocation = document.querySelector(".principal-info-weather-data__info-button");

const time = Date.now();
const timeDate = new Date(time);

const secondaryData = [
  document.getElementById("secondary-date"),
  document.getElementById("secondary-weather-image"),
  document.getElementById("secondary-temp")
]
const showLocationInfo = () => {

  if(!"geolocation" in navigator){
    return alert("Tu navegador no dispone de geolocalizacion, intenta con otro :(");
  }
  
  //If our navigator is a navigator who has geolocation, do this -> 
  const onUbication =  ubication => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${ubication.coords.latitude}&lon=${ubication.coords.longitude}&units=metric&appid=9a81ed26c2118da6383448260eeacebe`)
     .then(res => res.json())
     .then(res => {
      const locationWeatherData = res;
      fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${ubication.coords.latitude}&lon=${ubication.coords.longitude}&appid=9a81ed26c2118da6383448260eeacebe`)
      .then(res => res.json())
      .then(res => {
        showInfo(locationWeatherData, res)
      })
    })
    }
  
  const onError = (error) => {
    console.log("Ha ocurrido el siguiente error", error)
  }
  
  const options = {
    enableHighAccuracy: true, // Maximun accuracy
    maximunAge: 0, // NO CACHE
    timeout: 5000, // Timeout -> 5000 ms
  }
  
  navigator.geolocation.getCurrentPosition(onUbication, onError, options);
  
}

const showInfo = (data, dataNameCity) => {
  if(data.current.weather[0].main === "Rain" && data.current.weather[0].description === "light rain"){
    document.getElementById(".principal-info-weather-data__info").src = "images/LightRain.png"
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
  
  document.getElementById("temperature").textContent = Math.trunc(data.current.temp) + " °C";
  document.getElementById("data-weather").textContent = data.current.weather[0].main;
  document.getElementById("date").innerHTML = `Today  ·  <span>${timeDate.toDateString()}</span>`;
  document.getElementById("location").innerHTML = `<i class= "fa-solid fa-location-dot"></i>${dataNameCity[0].name}`
  
  for(let i = 0; i<= 4; i++){
    let imagen;

    document.querySelector(".time-cards-container").innerHTML += `
    <div class = "time-cards-container__card">
    <p id = "secondary-date">Fechaaa</p>
    <div class = "time-cards-container__card-containerImg">
        <img src = "images/Broken clouds.png" id = "secondary-weather-image">
    </div>
    <p id = "secondary-tempe">${Math.trunc(data.daily[i].temp.min)} °C</p>
    </div>`
  }
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
      console.log(res)
      const infoWeather = res;
      
      fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=9a81ed26c2118da6383448260eeacebe`)
      .then(res => res.json())
      .then(res => {
        
         showInfo(infoWeather, res)
      })
      }) 
    })
}

showLocationInfo();

closeIconSearch.addEventListener("click", () => {
  cardMainWeather.style.display = "flex";
  search.style.display = "none";

})

btnSearch.addEventListener("click", () => {
   cardMainWeather.style.display = "none";
   search.style.display = "flex";
})

btnLocation.addEventListener("click", showLocationInfo);

mainButton.addEventListener("click", getData);



