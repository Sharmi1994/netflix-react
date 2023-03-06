import React, { useState } from "react";
import Footer from "./footer";

function Signup() {
  const [click, setClick] = useState(false);
  function openDiv() {
    setClick(!click);
  }
  return (
    <React.Fragment>
      <div className="signin">
        <nav className="navbar navbar-brand navbar-expand-lg ">
          <h1 className="">NetFlix</h1>
        </nav>

        <div className="container signcontain">
          <div className="row">
            <h2 className="signhead">Sign up</h2>
          </div>
          <div className="row email ">
            <input type="name" placeholder="First Name" size="20" />

            <input type="name" placeholder="Last Name" size="20" />
            <input type="Emailaddress" placeholder="Email address" size="20" />
          </div>
          <div className="row email ">
            <input type="password" placeholder="Enter Password" size="40" />
          </div>
          <div className="row email ">
            <input type="password" placeholder="Re enter password" size="40" />
          </div>
          <div className="row email">
            <button className="btn-lg btn-danger">Sign up</button>
          </div>
          <div className="row email">
            <div className="col">
              {" "}
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label>Remember me</label>
            </div>
            <div className="col">
              {" "}
              <p className="needhelp">Need help?</p>
            </div>
          </div>

          <div className="row newto">
            <p>New to Netflix?</p>
            <a className="sun" href="">
              Sign up now
            </a>
            <p className="googlecap">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="link" onClick={openDiv}>
                Learn more.
              </span>{" "}
            </p>
            {click && (
              <p className="googlecap">
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <a className="link" href="https://policies.google.com/privacy">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className="link" href="https://policies.google.com/terms">
                  Terms of Service
                </a>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalized advertising by Google).
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Signup;
