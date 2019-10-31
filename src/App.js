import React from "react";
import "./App.css";

import InputSearch from "./InputSearch";

const data = require("./Data.json");

class App extends React.Component {
  state = {
    filter: ""
  };

  handleChange = e => this.setState({ filter: e.target.value });

  filterdArr = arr =>
    arr.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  findHeighst = data => {
    const highest = this.filterdArr(data).map(item =>
      parseInt(item.height, 10)
    );
    return Math.max(...highest);
  };

  render() {
    const maxHeight = this.findHeighst(data);
    return (
      <div className="App">
        <InputSearch handleChange={this.handleChange} />
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Hair color</td>
              <td>Height</td>
            </tr>
            {this.filterdArr(data).map(item => (
              <tr
                key={item.name}
                className={
                  (parseInt(item.height, 10) === maxHeight && "highest") || ""
                }
              >
                <td>{item.name}</td>
                <td>{item.hair_color}</td>
                <td>{item.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
