import logo from "../logo.svg";
import "../App.css";
import React, { useState, useEffect } from "react";

import { Auth } from "aws-amplify";
// eslint-disable-next-line
const config = require("./authconfig");
function Auth3(props) {
  const [user, setUser] = useState([]);

  function checkUser() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        //console.log({ user });
       // console.log(user);
        setUser(user);
      })
      .catch((err) => console.log(err));
  }
  const signin = () => {
    const u = Auth.federatedSignIn();
    console.log(u);
  };
  useEffect(() => {
    checkUser();
    console.log(user);
    return () => {};
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={signin}>Sign In</button>
        {user && user.username}
      </header>
    </div>
  );
}

export default Auth3;
