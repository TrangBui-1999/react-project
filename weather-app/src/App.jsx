import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import CurrentWeather from "./components/weather/CurrentWeather";
import WeatherInfo, {
  loader as weatherInfoLoader,
} from "./components/weather/WeatherInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home Page</h1>} />
      <Route path="/current" element={<CurrentWeather />} />
      <Route
        path="/other"
        element={<WeatherInfo />}
        loader={weatherInfoLoader}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
