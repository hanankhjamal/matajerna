import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Animated } from "react-animated-css";

function App() {
  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <div>hello world ;)</div>
    </Animated>
  );
}

export default App;
