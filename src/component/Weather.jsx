import React, { useEffect } from "react";
import "./weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_iconn from "../assets/cloud.png";
import drizzle_iconn from "../assets/drizzle.png";
import humidity_iconn from "../assets/humidity.png";
import rain_iconn from "../assets/rain.png";
import snow_iconn from "../assets/snow.png";
import wind_iconn from "../assets/wind.png";
const Weather = () => {
  /// fetch API key From online ///
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
        8e3f9a6d5629ee879c3ce859ea285de6
      `;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    search("London");
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Enter Country" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="temperature">20'C</p>
      <p className="location">London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_iconn} alt="" />
          <div>
            <p>90 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_iconn} alt="" />
          <div>
            <p>3.6 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
