import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
//import FormattedDate from "./FormattedDate.js";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({});
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //console.log(response.data);
    setReady(true);
    setWeatherData({
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
    });
  }
  // iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "4fc145a29e5e0b7f8bb3055a335e63cc";
    axios
      .get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
      .then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city name..."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
