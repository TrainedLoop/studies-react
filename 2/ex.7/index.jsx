import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDOM.render(
  <div>
    <Family lastName="Porto">
      <Member name="Daniel"  />
    </Family>
  </div>,
  document.getElementById("app")
);
