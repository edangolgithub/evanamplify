import React, { Component } from "react";
import MaterialTable from "material-table";
//import { tableIcons } from "./Micons";
export class MTable1 extends Component {
  hidecol() {
    this.setState({ hide: !this.state.hide }, () => {
      console.log(this.state.hide);
    });
  }
  constructor(props) {
    super(props);
    this.hidecol = this.hidecol.bind(this);
    this.state = {
      hide: false,
      columns: [
        // {
        //   title: "name",
        //   field: "name",
        //   render: (rowData) => {
        //     console.log(rowData);
        //     if (this.hide) return "";
        //   },
        // },
        {
          title: "name",
          field: "name",
        },
        { title: "surname", field: "surname" },
        { title: "birthYear", field: "birthYear", type: "numeric" },
        {
          title: "birthCity",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
        },
      ],
      data: [],
    };
  }
  componentDidMount() {
    const data = [
      {
        name: "Mehmet",
        surname: "Baran",
        birthYear: 1987,
        birthCity: 63,
      },
      {
        name: "ram",
        surname: "Baran",
        birthYear: 1987,
        birthCity: 34,
      },
      {
        name: "shyam",
        surname: "Baran",
        birthYear: 1987,
        birthCity: 34,
      },
      {
        name: "hari",
        surname: "Baran",
        birthYear: 1987,
        birthCity: 63,
      },
    ];
    let x = data.map(({ name, surname, ...remainingAttrs }) => remainingAttrs);
    this.setState({ data: x });
    this.setState({ hide: true });
  }

  render() {
    return (
      <div>
        <button onClick={this.hidecol}>hide col </button>
        <MaterialTable
          // icons={tableIcons}
          columns={this.state.columns}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default MTable1;
