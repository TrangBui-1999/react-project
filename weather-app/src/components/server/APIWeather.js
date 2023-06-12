export async function getWeatherData(lat, lon) {
  //console.log(lat, lon);
  const res = await fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}`
  );
  const data = await res.json();
  return data;
}
export async function getWeatherDemo() {
  const res = await fetch(
    "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Salt+Lake+City&units=imperial"
  );
  if (!res.ok) {
    throw {
      error: "Problem getting weather info",
    };
  }
  const data = await res.json();
  return data;
}
