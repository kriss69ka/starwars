import React from "react";

export default class InputSearch extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="search"
        onChange={this.props.handleChange}
      />
    );
  }
}
