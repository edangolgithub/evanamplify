import React, { Component } from "react";
import { AmplifyS3Album } from "@aws-amplify/ui-react";
export class Album extends Component {
  render() {
    return (
      <div>
        <AmplifyS3Album pickerText="grfg" />
      </div>
    );
  }
}

export default Album;
