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
import Profile from "./views/User/Profile.jsx";
import { LandingPage } from "./views/LandingPage.jsx";
import WorkoutManagement from "./views/Admin/WorkoutManagement/WorkoutManagement.jsx";
import UserManagement from "./views/Admin/UserManagement/UserManagement.jsx";
import ActivityManagement from "./views/Admin/ActivityManagement/ActivityManagement.jsx";
import EditActivityPage from "./views/Admin/ActivityManagement/EditActivityPage.jsx";

import { ActivityData } from "./components/index.js";

import EditWorkoutPage from "./views/Admin/WorkoutManagement/EditWorkoutPage.jsx";
import EditUserPage from "./views/Admin/UserManagement/EditUserPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
    element: (
      <ActivityData>
        {" "}
        <Dashboard />
      </ActivityData>
    ),
  },
  {
    path: "/activity",
    element: <Activity />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/history/:id",
    element: <History />,
  },
  {
    path: "/user",
    element: <Profile />,
  },
  {
    path: "/admin/user",
    element: <UserManagement />,
  },
  {
    path: "/admin/user/:id",
    element: <UserManagement />,
  },
  {
    path: "/admin/user/edit/:id",
    element: <EditUserPage />,
  },
  {
    path: "/admin/activity",
    element: <ActivityManagement />,
  },
  {
    path: "/admin/activity/edit/:id",
    element: <EditActivityPage />,
  },
  {
    path: "/admin/activity/:id",
    element: <ActivityManagement />,
  },
  {
    path: "/admin/workout",
    element: <WorkoutManagement />,
  },
  {
    path: "/admin/workout/:id",
    element: <WorkoutManagement />,
  },
  {
    path: "/admin/workout/edit/:id",
    element: <EditWorkoutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
