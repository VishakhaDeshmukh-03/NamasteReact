import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "title1", key: "h1" },
  "React Tutorial"
);
const heading2 = React.createElement(
  "h2",
  { id: "title2", key: "h2" },
  "Welcome To React Tutorial"
);
const wrapper = React.createElement("div", { id: "wrapper", key: "div" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(wrapper);
