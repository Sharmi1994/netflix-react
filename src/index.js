import React from "react";

import ReactDOM from "react-dom/client";

import App from "./components/App";
import Signup from "./components/Signup";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import Signin from "./components/signin";

//mongodb connect

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other rules...
    plugins: [
        new NodePolyfillPlugin()
    ]
}

router.post('/Signup', async (req, res) => {
  const { fname,lname } = req.body;

  console.log(req.body);

  const uri = 'mongodb+srv://sharmi:sharmi@cluster0.ewiwycg.mongodb.net/NetflixDB';
  const client = new MongoClient(uri);

  try {
    await client.connect();
 console.log("connected to the server successfully");
    const database = client.db('NetflixDB');
    const collection = database.collection('samplecollection');

    const result = await collection.insertOne({ fname,lname });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
});

module.exports = {target:"router",};

































//react router field connection
const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Signup" element={<Signup />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
