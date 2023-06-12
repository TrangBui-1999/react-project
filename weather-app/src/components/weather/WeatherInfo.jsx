import React, { Suspense } from "react";
import "./weather.css";
import { useLoaderData, defer, Await } from "react-router-dom";
import { getWeatherDemo } from "../server/APIWeather";

export async function loader() {
  const weatherPromise = getWeatherDemo();
  return defer({ weather: weatherPromise });
}

export default function WeatherInfo() {
  const loaderData = useLoaderData();
  //onsole.log(loaderData.weather);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.weather}>
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
