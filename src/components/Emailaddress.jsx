import React from "react";

import { useNavigate } from "react-router-dom";

function Emailaddress() {

  let navigate=useNavigate();
  function routeChange(){

    let path="/Signup";
    navigate(path);

  }
  return (
    <div>
      <h2 className="subsentence">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Email address"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button type="button" onClick={routeChange} className="btn btn-lg btn-danger">
          Get Started {">"}
        </button>
      </div>
    </div>
  );
}

export default Emailaddress;
