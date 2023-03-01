import React from "react";

function Grid() {
  return (
    <div class="container">
    <div class="row diagonalbox">
      <div class="col-3">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
          alt="img.png"
          width="40"
          height="60"
        />
      </div>
      <div class="col-6">
        <p class="Strange">Stranger Things</p>

        <p class="download">Downloading...</p>
      </div>
      <div class="col-3">
        <img
          src="/images/download-icon-gif-3.jpeg"
          alt="img.png"
          width="40"
          height="60"
        />
      </div>
    </div>
  </div>  );
}

export default Grid;
