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
import EditHistory from "./views/History/EditHistory.jsx";


// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index.js";

// Route 

import UserRoute from "./routes/UserRoute.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";


const store = createStore(rootReducer, composeWithDevTools());





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
      <UserRoute>
      <ActivityData>
        <Dashboard />
      </ActivityData>
      </UserRoute>
    ),
  },
  {
    path: "/activity",
    element: <UserRoute> <Activity /></UserRoute>
  },
  {
    path: "/history",
    element:(<UserRoute> <History /></UserRoute>),
  },
  {
    path: "/history/:id",
    element: (<UserRoute> <History /></UserRoute>), 
  },
  {
    path: "/user",
    element: (<UserRoute> <Profile /></UserRoute>),
  },{
    path: "/editHistory/:id",
    element: (<UserRoute><EditHistory/></UserRoute>) 
  },
  {
    path: "/admin/user",
    element:(<AdminRoute> <UserManagement /></AdminRoute>),
  },
  {
    path: "/admin/user/:id",
    element: (<AdminRoute> <UserManagement /></AdminRoute>),
  },
  {
    path: "/admin/user/edit/:id",
    element: (<AdminRoute><EditUserPage /></AdminRoute>),
  },
  {
    path: "/admin/activity",
    element: (<AdminRoute><ActivityManagement /></AdminRoute>),
  },
  {
    path: "/admin/activity/edit/:id",
    element: (<AdminRoute><EditActivityPage /></AdminRoute>),
  },
  {
    path: "/admin/activity/:id",
    element: (<AdminRoute><ActivityManagement /></AdminRoute>),
  },
  {
    path: "/admin/workout",
    element: (<AdminRoute><WorkoutManagement /></AdminRoute>),
  },
  {
    path: "/admin/workout/:id",
    element: (<AdminRoute><WorkoutManagement /></AdminRoute>),
  },
  {
    path: "/admin/workout/edit/:id",
    element: (<AdminRoute><EditWorkoutPage /></AdminRoute>),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router}>
  </RouterProvider>
  </Provider>
);
