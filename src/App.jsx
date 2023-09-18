import { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { LandingPage } from "./views/LandingPage";
import { Login } from "./views/Login/Login";
import Activity from "./views/Activity/Activity";

function App() {
  return (
    <>
      <Activity/>
    </>
  );
}

export default App;
