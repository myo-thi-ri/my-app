import React from "react";
// import WeatherIcon from "./WeatherIcon";

import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">{props.data.city}</h1>
      <ul>
        <li>Thursday 11:00</li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          {/* <WeatherIcon code={props.data.icon} size={52} /> */}
          <WeatherTemp celcius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
