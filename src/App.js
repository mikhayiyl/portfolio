import React from "react";
import { Routes, Route } from "react-router-dom";
import AllProjects from "./component/Projects/AllProjects";
import Home from "./pages/Index";
import SignInPage from "./pages/SignIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  );
};

export default App;
