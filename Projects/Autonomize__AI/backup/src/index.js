import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Follower from "./pages/Follower";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Repos from "./pages/Repos";
import { Provider } from "react-redux";

const QUERY_CLIENT = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about/:username/:repoid",
        element: <About />,
      },
      {
        path: "/followers/:username",
        element: <Follower />,
      },
      {
        path: "/repos/:username",
        element: <Repos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <RouterProvider router={router}>
        <Provider>
          <App />
        </Provider>
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
