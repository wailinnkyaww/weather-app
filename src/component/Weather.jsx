import React, { useEffect, useRef, useState } from "react";
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
  ///get input data use hoof
  const inputRef = useRef();
  ///set data  use hook //
  const [weatherData, setWeatherData] = useState(false);
  /// fetch API key From online ///
  const search = async (city) => {
    try {
      const url = `http://api.weatherapi.com/v1/current.json?key=af246769ca324820bf4122900241412&q=${city}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        temperatuer: data.current.temp_c,
        name: data.location.name,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        image: data.current.condition.icon,
        conditionText: data.current.condition.text,
      });
    } catch (error) {}
  };

  useEffect(() => {
    search("myanmar");
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Enter Country" />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      <img src={weatherData.image} alt="" className="weather-icon" />
      <span>{weatherData.conditionText} </span>
      <p className="temperature">{weatherData.temperatuer}'C</p>
      <p className="location">{weatherData.name}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_iconn} alt="" />
          <div>
            <p>
              {" "}
              <i>{weatherData.humidity}%</i>
            </p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_iconn} alt="" />
          <div>
            <p>
              <i>{weatherData.windSpeed} km/h</i>
            </p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
