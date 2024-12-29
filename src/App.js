import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home.jsx"
import { Contact } from "./Pages/Contact.jsx"
import { Employees } from "./Pages/Employees.jsx";
import { EmployeeDetails } from "./Pages/EmployeeDetails.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Employees">Employees</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Employees/:EmployeeName" element={<EmployeeDetails />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found!!!!</h1>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
