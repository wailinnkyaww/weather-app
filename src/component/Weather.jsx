import React from "react";
import "./weather.css";
const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Enter Country" />
        <img src="" alt="" />
      </div>
      <img src="" alt="" className="weather-icon" />
      <p className="temperature">20'</p>
      <p className="Location">London</p>
      <div className="weather-data">
        <div className="col">
          <img src="" alt="" />
          <div>
            <p>90 %</p>
            <span>HUmidity</span>
          </div>
        </div>
        <div className="col">
          <img src="" alt="" />
          <div>
            <p>3.6</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
