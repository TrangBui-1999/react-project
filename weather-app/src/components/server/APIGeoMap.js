export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e404ac3646mshf2551ddbdb30111p179194jsn74ec658690c7", // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = ""; // enter your key from openweather API

// Call API
export async function getSearchData(location) {
  //console.log(location);
  const res = await fetch(
    `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${location}`,
    geoApiOptions
  );
  if (!res.ok) {
    throw {
      error: "Problem getting search info",
    };
  }
  const dataRes = await res.json();
  //console.log(dataRes.data);
  return dataRes.data;
}
