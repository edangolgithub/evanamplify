import React, { Component } from "react";
import Amplify from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import "./App.css";
import Album from "./storage/Album";
//import Get2 from './storage/Get2'
import { listTodos } from "./graphql/queries";
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
  API: {
    aws_project_region: "us-east-1",
    aws_appsync_graphqlEndpoint:
      "https://d6kiluwqfna3raix5ebp3ebu2q.appsync-api.us-east-1.amazonaws.com/graphql",
    aws_appsync_region: "us-east-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-po6bmwo5p5bzfmk4wvzs66a2wi",
  },
});
export class App extends Component {
  async componentDidMount() {
    //const todos = await API.graphql(graphqlOperation(listTodos));
    //console.log(todos.data.listTodos.items);
  }

  render() {
    return (
      <div>
        <Album />
        {/* <Get2 /> */}
      </div>
    );
  }
}

export default App;
