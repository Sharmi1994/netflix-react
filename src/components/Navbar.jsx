import React from "react";

import Emailaddress from "./Emailaddress";

function Navbar() {
  return (
    <React.Fragment>
    <div class= "title">
      <nav class="navbar">
        <div class="navbar-brand">NetFlix</div>
        <div>
          <select class="language">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <button type="button" class="btn btn-danger">
            Signin
          </button>
        </div>
      </nav>
      <div class="container">
        <h1 class="subtitle">Unlimited movies, TV shows, and more.</h1>
        <h2 class="subsentence1">Watch anywhere. Cancel anytime..</h2>
       <Emailaddress/>
      
      </div>
   
    </div>
    <hr/>
    </React.Fragment>
    
  );
}

export default Navbar;
