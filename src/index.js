import React from "react";
import ReactDOM from "react-dom";

import TextAlign from "./textalign";
import FontSizer from "./FontSizer";
import ColorChange from "./ColorChange";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TextAlign />
      <hr />
      <FontSizer />
      <hr />
      <ColorChange />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
