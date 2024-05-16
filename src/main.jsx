import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "./test.scss";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <>
  //   <div id="test">
  //     <h2>Hello</h2>
  //     <button>B</button>
  //   </div>
  //   <button className="btnB2 violet">B2</button>
  // </>
);
