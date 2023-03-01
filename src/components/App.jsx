import React from "react";

import Navbar from "./Navbar";

import Styling from "./Styling";

import details from "../details";

import Grid from "./grid";

function detailsImport(detail) {
  return (
    <Styling
      key={detail.id}
      title={detail.Topic}
      image={detail.imgURL}
      position={detail.imagePosition}
      description={detail.Desc}
      Additionalgrid={detail.Additional}
    />
  );
}

function App() {
  return (
    <div>
      <Navbar />
   
      {details.map(detailsImport)}
  <Grid />
    </div>
  );
}

export default App;
