import React from "react";
import ReactDOM from "react-dom";
import Field from "./field";

ReactDOM.render(
  <div>
    <Field  initialValue={10} />
  </div>,
  document.getElementById("app")
);
