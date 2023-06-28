/**Test Function in each component, do not apply for final project */

import React, { Suspense } from "react";
import {
  useLoaderData,
  defer,
  Await,
  Form,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { getSearchData } from "../server/APIGeoMap";

export async function loader({ request }) {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("location");
  return getSearchData(searchTerm);
}

export async function action({ request }) {
  return "Hi";
}

function SearchParams() {
  const loaderData = useLoaderData();
  console.log(loaderData);

  const displayData = loaderData
    ? loaderData.map((item) => {
        return (
          <>
            <p>City : {item.city}</p>
            <br />
            <p>Country: {item.country}</p>
            <br />
            <p>Latitude: {item.latitude}</p>
            <br />
            <p>Longitude: {item.longitude}</p>
          </>
        );
      })
    : "Cannot find location";
  return (
    <>
      <Form method="get" action="/search">
        <input name="location" type="text" placeholder="Type your location" />
        <button type="submit">Find</button>
      </Form>
      {displayData}
    </>
  );
}

export default SearchParams;
