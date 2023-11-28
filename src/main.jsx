import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppViews from "./AppViews.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppViews />
  </BrowserRouter>
);
