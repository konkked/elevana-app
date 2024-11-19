import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // TailwindCSS imports should already be in this file
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);