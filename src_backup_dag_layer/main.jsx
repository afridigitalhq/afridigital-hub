import "./core/bus/bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import NeuralBrain from "./brain/NeuralBrain";

ReactDOM.createRoot(document.getElementById("root")).render(
  <><ControlTower /><NeuralBrain /></>
);
