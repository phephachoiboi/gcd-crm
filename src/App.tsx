import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard.tsx";
import AllTasks from "./components/AllTask/AllTask.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/alltask" element={<AllTasks />} />
      </Routes>
    </Router>
  );
};

export default App;
