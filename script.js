// script.js

document.addEventListener("DOMContentLoaded", () => {
    // const cityNameElement = document.getElementById("cityName");
    const weatherDetailsContainer = document.querySelector(".slider-container");
    const airDetailsContainer = document.querySelector(".extra-details-container");
    const cityInput = document.getElementById("city");
    const submitButton = document.getElementById("submit");
    const alert = document.getElementById("alert");
    const loader = document.getElementById("loader");
    // function loading(){
    //   loader.style.display = "block";
    //   alert.style.display = "none";
    // }
  
    // Function to display weather data
    function displayWeatherData(data) {
      // cityNameElement.innerHTML = city;
      
      document.getElementById("wind_speed").innerHTML =  data.wind_speed + " km/hr";
      document.getElementById("temp").innerHTML = data.temp + " °C";
      document.getElementById("humidity").innerHTML = data.humidity + " %";
      document.getElementById("feels_like").innerHTML = "feels_like &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.feels_like+" °C";
      document.getElementById("max_temp").innerHTML = "max_temp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +  data.max_temp+" °C";
      document.getElementById("wind_degrees").innerHTML = "wind_degrees &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + data.wind_degrees+ " km/hr";
  
      weatherDetailsContainer.style.display = "block";
      alert.style.display = "none";
      // loader.style.display = "none";
    }
  
    // Function to fetch weather data
    function fetchWeatherData(city) {
      const apiKey = 'v1uTruJKa+/2hoedxkRd2w==rn8tm79AhwPAsbEh';
      const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;
      
      fetch(url, {
        headers: {
          'X-Api-Key': apiKey
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const upper = `${city}`;
          const toupper  = upper.toUpperCase();
          document.getElementById("city_name").innerHTML = toupper;
          displayWeatherData(data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          // cityNameElement.textContent = "Error fetching data";
          weatherDetailsContainer.style.display = "none";
        });
    }

    // Function to display air-quality data
    function displayAirData(data1) {
      document.getElementById("air_quality").innerHTML = data1.overall_aqi;

      // document.getElementById("wind_speed_").innerHTML =  "wind_speed    " + data1.wind_speed;
      // document.getElementById("temp_").innerHTML =   "temp   " + data1.temp;
      // document.getElementById("humidity_").innerHTML =  "humidity    " +  data1.humidity;
      // document.getElementById("feels_like_").innerHTML =  "feels_like    " +  data1.feels_like;
      // document.getElementById("max_temp_").innerHTML =   "max_temp   " + data1.max_temp;
      // document.getElementById("wind_degrees_").innerHTML =   "wind_degrees   " + data1.wind_degrees;

      airDetailsContainer.style.display = "block";

      }

    // Function for air-quality index
    function fetchAirQuality(city) {
      const apiKey = 'v1uTruJKa+/2hoedxkRd2w==rn8tm79AhwPAsbEh';
      const url = `https://api.api-ninjas.com/v1/airquality?city=${city}`;
      
      fetch(url, {
        headers: {
          'X-Api-Key': apiKey
        }
      })
        .then(response1 => {
          if (!response1.ok) {
            throw new Error('Network response was not ok');
          }
          return response1.json();
        })
        .then(data1 => {
          displayAirData(data1);
        })
        .catch(error => {
          console.error('Error fetching air quality data:', error);
          // cityNameElement.textContent = "Error fetching data";
          airDetailsContainer.style.display = "none";
        });
    }


    // Event listener for search form submission
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      const city = cityInput.value.trim();
      if (city !== "") {
        // alert("Search for a city first");
        // loading();
        fetchWeatherData(city);
        fetchAirQuality(city);
      }
    });

  });
      



  // function displayWeatherData(data) {
  //   const cityNameElement = document.getElementById("cityName");
  //   const windSpeedElement = document.querySelector(".wind_speed");
  //   const tempElement = document.querySelector(".temp");
  //   const humidityElement = document.querySelector(".humidity");
  //   const feelsLikeElement = document.querySelector(".feels_like");
  //   const maxTempElement = document.querySelector(".max_temp");
  //   const windDegreesElement = document.querySelector(".wind_degrees");
  
  //   if (!cityNameElement || !windSpeedElement || !tempElement || !humidityElement || !feelsLikeElement || !maxTempElement || !windDegreesElement) {
  //     console.error('Error: Weather data elements not found.');
  //     weatherDetailsContainer.style.display = "none";
  //     return;
  //   }
  
  //   cityNameElement.innerHTML = data.city_name;
  //   windSpeedElement.innerHTML = data.wind_speed;
  //   tempElement.innerHTML = data.temp;
  //   humidityElement.innerHTML = data.humidity;
  //   feelsLikeElement.innerHTML = data.feels_like;
  //   maxTempElement.innerHTML = data.max_temp;
  //   windDegreesElement.innerHTML = data.wind_degrees;
  
  //   weatherDetailsContainer.style.display = "block";
  // }
  
