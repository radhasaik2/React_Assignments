import React from "react";
import { createRoot } from "react-dom/client";

const htmlelement = document.getElementById("root");
const reactroot = createRoot(htmlelement);

const reactelement = React.createElement("h1", null, "Hello World!..");

reactroot.render(reactelement);

const html = document.getElementById("nest");
const root = createRoot(html);

const element = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello"),
  React.createElement("h1", null, "World!..")
);
root.render(element);
