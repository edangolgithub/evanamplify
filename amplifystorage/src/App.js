import React, { Component } from 'react'
import Amplify from "aws-amplify";
import './App.css'
import Album from './storage/Album'
//import Get2 from './storage/Get2'
Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:731158cd-a6b2-415b-90e3-b2444178e991", //REQUIRED - Amazon Cognito Identity Pool ID
    region: "us-east-1", // REQUIRED - Amazon Cognito Region
    userPoolId: "us-east-1_rXGb3oncb", //OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: "27muh6i5grg9veudk9qkevrn", //OPTIONAL - Amazon Cognito Web Client ID
  },
  Storage: {
    AWSS3: {
      bucket: "ed2021", //REQUIRED -  Amazon S3 bucket name
      region: "us-east-1", //OPTIONAL -  Amazon service region
    },
  },
});
export class App extends Component {
    render() {
        return (
            <div>
                <Album />
                {/* <Get2 /> */}
            </div>
        )
    }
}

export default App
