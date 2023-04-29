import React, { Component } from 'react';
import { RotatingLines } from "react-loader-spinner";

export default class Loader extends Component {
  render() {
    return (
      <RotatingLines
        className="Loader"
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }
}