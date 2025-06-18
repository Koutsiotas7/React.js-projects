import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading.jsx"; // .jsx is optional in ES6+
import List from "./List.jsx";

ReactDOM.render(
  <div>
    <Heading></Heading>
    <List></List>
  </div>,
  document.getElementById("root")
);



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
