import React from "react";

import Emailaddress from "./Emailaddress";

function Navbar() {
  return (
    <React.Fragment>
    <div className= "title">
      <nav className="navbar">
        <div className="navbar-brand">NetFlix</div>
        <div>
          <select className="language">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <button type="button" className="btn btn-danger">
            Signin
          </button>
        </div>
      </nav>
      <div className="container customisedcontain">
        <h1 className="subtitle">Unlimited movies, TV shows, and more.</h1>
        <h2 className="subsentence1">Watch anywhere. Cancel anytime..</h2>
       <Emailaddress/>
      
      </div>
   
    </div>
    <hr/>
    </React.Fragment>
    
  );
}

export default Navbar;
