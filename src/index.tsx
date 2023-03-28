import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";

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
