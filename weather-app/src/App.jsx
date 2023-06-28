import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import CurrentWeather from "./components/weatherDash/CurrentWeather";
import WeatherInfo, {
  loader as weatherInfoLoader,
} from "./components/weatherDash/WeatherInfo";
import SearchLocation, {
  loader as SearchInfoLoader,
  action as SearchAction,
} from "./components/searchLocation/SearchLocation";
import SearchParams, {
  loader as SearchParamLoader,
  action as SearchParam,
} from "./components/test/SearchParams";

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
      {/* <Route
        path="/search"
        element={<SearchParams />}
        action={SearchParam}
        loader={SearchParamLoader}
      /> */}
      <Route
        path="/search"
        element={<SearchLocation />}
        action={SearchAction}
        loader={SearchInfoLoader}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
