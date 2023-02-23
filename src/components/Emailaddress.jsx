import React from "react";

function Emailaddress() {
  return (
    <div>
      <h2 class="subsentence">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Email address"
          aria-label="Username"
          aria-describedby="basic-addon1"
        /><button type="button" class="btn btn-lg btn-danger">
        Get Started
      </button>
      </div>
      
    </div>
  );
}

export default Emailaddress;
