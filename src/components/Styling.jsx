import React from "react";

import Container from "react-bootstrap/Container";

function Styling(props) {
  return (
    <div className=" netflixknowledge">
      {props.position === "right" ? (
        <Container>
          <div className="row describerow">
            <div className="col describecol">
              <h1>{props.title}</h1>
              <h2>{props.description}</h2>
            </div>
            <div className="col ">
              <img className="describeimage" src={props.image} alt="img.png" />
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="row describerow">
            <div className="col ">
              <img className="describeimage" src={props.image} alt="img.png" />
            </div>

            <div className="col describecol">
              <h1>{props.title}</h1>
              <h2>{props.description}</h2>
            </div>
          </div>
        </Container>
      )}
      <hr/>
    </div>
  );
}

export default Styling;
