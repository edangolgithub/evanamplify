import React, { Component } from "react";

export class Upload extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange = async (e) => {
    const file = e.target.files[0];
    try {
      const d = await Storage.put(file.name, file, {
        // contentType: "image/png", // contentType is optional
      });
      console.log(d);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  render() {
    return (
      <div>
        <input type="file" onChange={onChange} />
      </div>
    );
  }
}

export default Upload;
