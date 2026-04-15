import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

export function Test() {
  return (
    <div style={{ padding: "40px", fontSize: "32px", color: "red" }}>
      ROUTER IS WORKING
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Test />
    </BrowserRouter>
  </React.StrictMode>
);