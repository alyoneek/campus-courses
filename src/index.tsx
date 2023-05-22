import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "@/index.css";
import { store } from "@/store";
import Routes from "./router/Routes";

const container = document.getElementById("root");

if (container == null) {
  throw new Error("container can't be null");
}

const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <RouterProvider router={Routes()} />
  </Provider>
);
