// import { func } from "prop-types";
import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function toFarenheit() {
    return Math.round((props.celcius * 9) / 5 + 32);
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemp">
        <span>
          {Math.round(props.celcius)} C |{" "}
          <a href="/" onClick={showFarenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span>
          {toFarenheit()}{" "}
          <a href="/" onClick={showCelcius}>
            C
          </a>
          | F
        </span>
      </div>
    );
  }
  // function showFarenheit(event) {
  //   event.preventDefault();
  //   setUnit("Farenheit");
  // }

  //   function showCelcius(event) {
  //     event.preventDefault();
  //     setUnit("Celcius");
  //   }

  //   function farenheit() {
  //     return (props.celcius * 9) / 5 + 32;
  //   }

  //   <div className="WeatherTemperature">
  //   <span className="temperature">{Math.round(farenheit)}</span>
  //   <span className="unit">
  //     <a href="/" onClick={showCelcius}>
  //       {""}C
  //     </a>
  //     |F
  //   </span>
  // </div>
  // if (unit === "celcius") {
  //   return props.celcius;
  //   //   <div className="WeatherTemperature">
  //   //     <span className="temperature">{Math.round(props.celsius)}</span>
  //   //     <span className="unit">
  //   //       °C|
  //   //       <a href="/" onClick={showFarenheit}>
  //   //         {""}F
  //   //       </a>
  //   //     </span>
  //   //   </div>
  // } else {
  //   return "F";
  // }
}
