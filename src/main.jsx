import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

window.addEventListener("error",(e)=>{
 document.getElementById("root").innerHTML="<h1 style=\"color:red\">ERROR: "+e.message+"</h1>";
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
