import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDOM.render(
  <div>
    <Family lastName="Porto">
      <Member name="Daniel" />
      <Member name="Daniel2" />
      <Member name="Daniel3" />
    </Family>
  </div>,
  document.getElementById("app")
);
