const closeIconSearch = document.querySelector('.principal-info-weather-data__search__icon')
const search = document.querySelector('.principal-info-weather-data__search')
const cardMainWeather = document.querySelector('.principal-info-weather-data__info')
const btnSearch = document.querySelector('.principal-info-weather-data__info-btnSearch')
const searhInput = document.getElementById('searchInput')
const mainBtnSearch = document.getElementById('mainButton')
const btnLocation = document.querySelector('.principal-info-weather-data__info-button')
const listContainersCards = document.querySelectorAll('.time-cards-container__card')
const time = Date.now()
const timeDate = new Date(time)

const showLocationInfo = () => {
  if (!'geolocation' in navigator) {
    return alert('Tu navegador no dispone de geolocalizacion, intenta con otro :(')
  }

  // If our navigator is a navigator who has geolocation, do this ->
  const onUbication = ubication => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${ubication.coords.latitude}&lon=${ubication.coords.longitude}&units=metric&appid=9a81ed26c2118da6383448260eeacebe`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        const locationWeatherData = res
        fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${ubication.coords.latitude}&lon=${ubication.coords.longitude}&appid=9a81ed26c2118da6383448260eeacebe`)
          .then(res => res.json())
          .then(res => {
            showMainInfo(locationWeatherData, res)
            showSecondaryInfo(locationWeatherData)
            showHighlights(locationWeatherData)
          })
      })
  }

  const onError = (error) => {
    console.log('Ha ocurrido el siguiente error', error)
  }

  const options = {
    enableHighAccuracy: true, // Maximun accuracy
    maximunAge: 0, // NO CACHE
    timeout: 5000 // Timeout -> 5000 ms

  }
  navigator.geolocation.getCurrentPosition(onUbication, onError, options)
}

// Method to show the principal 's info
const showMainInfo = (data, dataNameCity) => {
  if (data.current.weather[0].main === 'Rain' && data.current.weather[0].description === 'light rain') {
    document.getElementById('.principal-info-weather-data__info').src = 'images/LightRain.png'
  }
  if (data.current.weather[0].main === 'Rain') {
    document.getElementById('weather-image').src = 'images/ModerateRain.png'
  }
  if (data.current.weather[0].main === 'Rain' && data.current.weather[0].description === 'very heavy rain') {
    document.getElementById('weather-image').src = 'images/HeavyRain.png'
  }
  if (data.current.weather[0].main === 'Rain' && data.current.weather[0].description === 'freezing rain') {
    document.getElementById('weather-image').src = 'images/Sleet.png'
  }
  if (data.current.weather[0].main === 'Snow') {
    document.getElementById('weather-image').src = 'images/Snow.png'
  }
  if (data.current.weather[0].main === 'Clouds' && data.current.weather[0].description === 'few clouds') {
    document.getElementById('weather-image').src = 'images/LightCloud.png'
  }
  if (data.current.weather[0].main === 'Clouds' && data.current.weather[0].description === 'scattered clouds') {
    document.getElementById('weather-image').src = 'images/scattered.png'
  }
  if (data.current.weather[0].main === 'Clouds' && data.current.weather[0].description === 'overcast clouds') {
    document.getElementById('weather-image').src = 'images/HeavyCloud.png'
  }
  if (data.current.weather[0].main === 'Clouds' && data.current.weather[0].description === 'broken clouds') {
    document.getElementById('weather-image').src = 'images/BrokenClouds.png'
  }
  if (data.current.weather[0].main === 'Clear') {
    document.getElementById('weather-image').src = 'images/Clear.png'
  }
  if (data.current.weather[0].main === 'Mist') {
    document.getElementById('weather-image').src = 'images/mist.png'
  }
  if (data.current.weather[0].main === 'Thunderstorm') {
    document.getElementById('weather-image').src = 'images/Thunderstorm.png'
  }

  document.getElementById('temperature').textContent = Math.trunc(data.current.temp) + ' °C'
  document.getElementById('data-weather').textContent = data.current.weather[0].main
  document.getElementById('date').innerHTML = `Today  ·  <span>${timeDate.toDateString()}</span>`
  document.getElementById('location').innerHTML = `<i class= "fa-solid fa-location-dot"></i>${dataNameCity[0].name}`
}

// Method to show secondary's info weather
const showSecondaryInfo = (data) => {
  let index = 0

  listContainersCards.forEach(card => {
    let image
    let date

    if (data.daily[index].weather[0].main === 'Rain' && data.daily[index].weather[0].description === 'light rain') {
      image = 'images/LightRain.png'
    }
    if (data.daily[index].weather[0].main === 'Rain') {
      image = 'images/ModerateRain.png'
    }
    if (data.daily[index].weather[0].main === 'Rain' && data.daily[index].weather[0].description === 'very heavy rain') {
      image = 'images/HeavyRain.png'
    }
    if (data.daily[index].weather[0].main === 'Rain' && data.daily[index].weather[0].description === 'freezing rain') {
      image = 'images/Sleet.png'
    }
    if (data.daily[index].weather[0].main === 'Snow') {
      image = 'images/Snow.png'
    }
    if (data.daily[index].weather[0].main === 'Clouds' && data.daily[index].weather[0].description === 'few clouds') {
      image = 'images/LightCloud.png'
    }
    if (data.daily[index].weather[0].main === 'Clouds' && data.daily[index].weather[0].description === 'scattered clouds') {
      image = 'images/scattered.png'
    }
    if (data.daily[index].weather[0].main === 'Clouds' && data.daily[index].weather[0].description === 'overcast clouds') {
      image = 'images/HeavyCloud.png'
    }
    if (data.daily[index].weather[0].main === 'Clouds' && data.daily[index].weather[0].description === 'broken clouds') {
      image = 'images/BrokenClouds.png'
    }
    if (data.daily[index].weather[0].main === 'Clear') {
      image = 'images/Clear.png'
    }
    if (data.daily[index].weather[0].main === 'Mist') {
      image = 'images/mist.png'
    }
    if (data.daily[index].weather[0].main === 'Thunderstorm') {
      image = 'images/Thunderstorm.png'
    }

    if (index === 0) { date = 'Tomorrow' }

    if (index > 0) {
      const weekInMilliseconds = 1000 * 60 * 60 * 24 * index
      const suma = timeDate.getTime() + weekInMilliseconds
      const dateUpdated = new Date(suma)
      date = dateUpdated
      console.log(date)
      date = (date.toString()).substring(0, 3) + ' ' + (date.toString()).substring(8, 15)
    }

    card.innerHTML = `<p id = "secondary-date">${date}</p>
      <div class = "time-cards-container__card-containerImg">
          <img src = ${image} id = "secondary-weather-image" title = "hola">
      </div>
      <p id = "secondary-temp"><span>${Math.trunc(data.daily[index].temp.max)}</span><span>${Math.trunc(data.daily[index].temp.min)} °C</span> </p>
      `
    index++
  })
}

// Method to show the highlights's day
const showHighlights = (data) => {
  let windDirection

  if ((data.current.wind_deg >= 0 && data.current.wind_deg <= 60) || (data.current.wind_deg <= 360 && data.current.wind_deg >= 300)) { windDirection = 'N' }
  if ((data.current.wind_deg >= 60 && data.current.wind_deg <= 90)) { windDirection = 'E' }
  if (data.current.wind_deg === 45) { windDirection = 'NE' }
  if (data.current.wind_deg === 180) {
    windDirection = 'S'
  }
  if (data.current.wind_deg === 270) { windDirection = 'O' }

  document.querySelector('.hightlights-container-master__information1-wind').innerHTML =
  ` <p class = "hightlights-container-master__information1-wind__title">Wind status</p>
  <p id = "wind-velocity">${Math.trunc(data.current.wind_speed)}mph</p>
  <p id = "wind-direction">${windDirection}</p> `

  document.querySelector('.hightlights-container-master__information1-humidity').innerHTML = ` <p class = "hightlights-container-master__information1-wind__title">Humidity</p>
  <p id = "humidity-value">${data.current.humidity}%</p>
  <progress id = "progrees-bar" max = "100" value = "${data.current.humidity}"></progress> `

  document.querySelector('.hightlights-container-master__information2-visibility').innerHTML =
  `<p class = "hightlights-container-master__information1-wind__title">Visibility</p>
  <p id = "visibility-value">${Math.trunc((data.current.visibility) / 1609)} miles </p>
  `

  document.querySelector('.hightlights-container-master__information2-airPresure').innerHTML =
  `<p class = "hightlights-container-master__information1-wind__title">Air Pressure</p>
  <p id = "air-pressure-value">${data.current.pressure} mb</p>
  `
}

// Method to get the data
const getData = () => {
  cardMainWeather.style.display = 'flex'
  search.style.display = 'none'

  let latitude
  let longitude

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value}&appid=9a81ed26c2118da6383448260eeacebe`)
    .then(res => res.json())
    .then(res => {
      // This data is very important to search the weather in each city
      latitude = res[0].lat
      longitude = res[0].lon

      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=9a81ed26c2118da6383448260eeacebe`)
        .then(res => res.json())
        .then(res => {
          const infoWeather = res

          fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=9a81ed26c2118da6383448260eeacebe`)
            .then(res => res.json())
            .then(res => {
              showMainInfo(infoWeather, res)
              showSecondaryInfo(infoWeather)
              showHighlights(infoWeather)
            })
        })
    })
}
// First of all we call this method to show our weather data location
showLocationInfo()

closeIconSearch.addEventListener('click', () => {
  cardMainWeather.style.display = 'flex'
  search.style.display = 'none'
})

btnSearch.addEventListener('click', () => {
  cardMainWeather.style.display = 'none'
  search.style.display = 'flex'
})

btnLocation.addEventListener('click', showLocationInfo)

mainButton.addEventListener('click', getData)
