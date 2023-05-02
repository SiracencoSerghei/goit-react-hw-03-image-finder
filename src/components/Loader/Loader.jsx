import React, { Component } from 'react';
import { RotatingLines } from "react-loader-spinner";

export default class Loader extends Component {
  render() {
    return (
      <div className="Overlay-loader">
        <RotatingLines
        className="Loader"
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      </div>
    );
  }
}