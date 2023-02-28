import React from "react";

import Navbar from "./Navbar";

import Styling from "./Styling";

import details from "../details";

function detailsImport(detail) {
  return (
    <Styling
      key={detail.id}
      title={detail.Topic}
      image={detail.imgURL}
      position={detail.imagePosition}
      description={detail.Desc}
    />
  );
}

function App() {
  return (
    <div>
      <Navbar />
      {details.map(detailsImport)}
    </div>
  );
}

export default App;
