import React, { useEffect, useState } from "react";
//import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "4fc145a29e5e0b7f8bb3055a335e63cc";
    // let longitude = props.coordinates.lon;
    // let latitude = props.coordinates.lat;
    // let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${longitude}&lon=${latitude}&appid=${apiKey}&units=metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=41&lon=74&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}