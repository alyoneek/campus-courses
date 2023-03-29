import "@/index.css";
import Routes from "@/router/Routes";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

if (container == null) {
  throw new Error("container can't be null");
}

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
