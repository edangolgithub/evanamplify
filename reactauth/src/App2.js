import  { Auth, Hub } from 'aws-amplify';
import React, { useState, useEffect } from 'react'

import { withAuthenticator } from '@aws-amplify/ui-react'
import {  AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [
  localRedirectSignIn,
  productionRedirectSignIn,
] = awsConfig.oauth.redirectSignIn.split(",");

const [
  localRedirectSignOut,
  productionRedirectSignOut,
] = awsConfig.oauth.redirectSignOut.split(",");

const updatedAwsConfig = {
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  }
}

Amplify.configure(updatedAwsConfig);


function App2() {
const [user, setuser] = useState()
const [customState, setCustomState] = useState()
    useEffect(() => {
        
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event);
      console.log(data);
      switch (event) {
        case "signIn":
          setuser(data)
          break;
        case "signOut":
          setuser(null)
          break;
        case "customOAuthState":
        setCustomState(data);
         
          break;
          default:
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user =>{ setuser(user)}
      )
      .catch(() => console.log("Not signed in"));
  
        return () => {
            
        }
    }, [])
  return (
    <div className="App">
      <header className="App-header">
      {user&& user.username}
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App2)