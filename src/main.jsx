import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Login } from "./views/Login/Login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./views/Dashboard/Dashboard.jsx";
import SignUp from "./views/SignUp/SignUp.jsx";
import Activity from "./views/Activity/Activity.jsx";
import History from "./views/History/History.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/activity",
    element: <Activity />,
  },
  {
    path: "/history",
    element: <History/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
