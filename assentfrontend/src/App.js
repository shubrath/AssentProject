import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SuperAdmin from "./components/SuperAdmin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/super-admin/:id" element={<SuperAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;
