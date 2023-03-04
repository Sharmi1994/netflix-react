import React from "react";

import ReactDOM from "react-dom/client";

import App from "./components/App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import Signin from "./components/signin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="Signin" element={<Signin />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
