const closeIconSearch = document.querySelector(".principal-info-weather-data__search__icon");
const search = document.querySelector(".principal-info-weather-data__search");
const cardMainWeather = document.querySelector(".principal-info-weather-data__info");
const btnSearch = document.querySelector(".principal-info-weather-data__info-btnSearch");
const searhInput = document.getElementById("searchInput");
const mainBtnSearch = document.getElementById("mainButton")

//Method to get the data
const getData = () => {
  
  let latitude;
  let longitude;

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&appid=9a81ed26c2118da6383448260eeacebe`)
    .then(res => res.json())
    .then(res => {
      //This data is very important to search the weather in each city
     latitude = res[0].lat;
     longitude = res[0].lon;
     
     fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=9a81ed26c2118da6383448260eeacebe`)
     .then(res => res.json())
     .then(res => console.log(res))
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



