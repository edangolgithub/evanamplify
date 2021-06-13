import React, { Component } from "react";
//import * as functions from "./functions/apigateway.js";
import { list } from "./functions/mutationsf.js";
export class App extends Component {
  constructor(props) {
    super(props);
    this.listtodos = this.listtodos.bind(this);
  }

  componentDidMount() {
    //functions.scanall();
    //functions.getone("abc")

    if (1 === 0) {
      this.listtodos();
    }
  }
  listtodos() {
    const data = list();
    data.then((d) => {
      console.log(d.data.listTodos.items);
    });
  }
  render() {
    return <div>hello</div>;
  }
}

export default App;
