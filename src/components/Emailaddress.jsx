import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Inputinemail from "./Inputinemail.jsx";

function Emailaddress() {
  let navigate = useNavigate();
  function routeChange() {
    let path = "/Signup";
    navigate(path);
  }
  const [email, setEmail] = useState("");

  function handleInput(inputValues) {
    setEmail(inputValues);

    console.log(email);
  }

  return (
    <div>
      <h2 className="subsentence">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>

      <form onSubmit={routeChange}>
        <div className="input-group mb-3">
          <Inputinemail onSubmit={handleInput} />

          <button type="submit" className="btn btn-lg btn-danger">
            Get Started {">"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Emailaddress;
