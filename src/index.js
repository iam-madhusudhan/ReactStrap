import React from "react";
import { render } from "react-dom";
import Navbar from "./navbar";
import Jumbotron from "/jumbotron";
require("./css/style.css");

const App = () => (
  <div>
    <Navbar />,
    <Jumbotron />
  </div>
);

render(<App />, document.getElementById("root"));
