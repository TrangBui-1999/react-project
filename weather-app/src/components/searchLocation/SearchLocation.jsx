import React, { useEffect, useState } from "react";
import { useLoaderData, Form } from "react-router-dom";
import { getSearchData } from "../server/APIGeoMap";
import { getWeatherData } from "../server/APIWeather";

export async function loader({ request }) {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("location");
  //console.log(searchTerm);
  return getSearchData(searchTerm);
}

export async function action({ request }) {
  return "Need Updated";
}

function SearchLocation() {
  const loaderData = useLoaderData();
  const [dataInfo, setDataInfo] = useState(null);

  function handle(lat, lon) {
    let location = { lat: lat, lon: lon };
    //console.log(location.lat, location.lon);
    getWeatherData(location.lat, location.lon).then((data) => {
      setDataInfo(data);
    });
  }
  //console.log(dataInfo);
  const DisplayElement = () => {
    const iconUrl = `http://openweathermap.org/img/wn/${dataInfo.weather[0].icon}@2x.png`;
    return (
      <>
        <h3>{dataInfo.main.temp}ºF</h3>
        <img src={iconUrl} />
        <p>{dataInfo.weather[0].description}</p>
      </>
    );
  };

  const displayLocation = loaderData.map((item) => {
    return (
      <>
        <li key={item.id}>
          <p>City : {item.city}</p>
          <br />
          <p>Country: {item.country}</p>
          <br />
          <p>Latitude: {item.latitude}</p>
          <br />
          <p>Longitude: {item.longitude}</p>
          {/* !important: set OnClick button like this to prevent many loop */}
          <button onClick={() => handle(item.latitude, item.longitude)}>
            Choose
          </button>
        </li>
      </>
    );
  });
  return (
    <>
      <Form method="get" action="/search">
        <input name="location" type="text" placeholder="Type your location" />
        <button type="submit">Find</button>
      </Form>
      {displayLocation ? displayLocation : "Cannot find location"}
      {dataInfo ? <DisplayElement /> : ""}
    </>
  );
}

export default SearchLocation;
