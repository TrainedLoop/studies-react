import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";
import family from "./family";

ReactDOM.render(
  <div>
    <Family>
      <Member name="Daniel" lastName="Porto" />
    </Family>
  </div>,
  document.getElementById("app")
);
