import React, { useState, Suspense, useEffect } from "react";
import "./weather.css";
import { getWeatherData } from "../server/APIWeather";
import { defer, Await } from "react-router-dom";

export default function CurrentWeather() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation((prev) => ({
        ...prev,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }));
    });
  }, []);

  const { lat: lat, lon: lon } = location;
  const dataReturn = getWeatherData(lat, lon);
  const dataPromise = defer({ weather: dataReturn });
  //console.log(dataPromise);
  return (
    <>
      <h2>Your current location is :</h2>
      <p>
        Lattitude: {lat}, Longtitude: {lon}
      </p>

      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={dataPromise.data.weather}>
          {(loadedWeather) => {
            const iconUrl = `http://openweathermap.org/img/wn/${loadedWeather.weather[0].icon}@2x.png`;
            return (
              <>
                <h3>{loadedWeather.main.temp}ºF</h3>
                <img src={iconUrl} />
                <p>{loadedWeather.description}</p>
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
