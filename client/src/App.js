import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LeafCanvas from "./components/LeafCanvas";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import ResultsPage from "./pages/ResultsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  const [dark, setDark] = useState(false);

  const [results, setResults] = useState(null);

  return (
    <div className={dark ? "dark-theme" : "light-theme"}>
      <LeafCanvas dark={dark} />
      <BrowserRouter>
        <Navbar dark={dark} setDark={setDark} />

        <Routes>
          <Route
            path="/"
            element={<HomePage dark={dark} />}
          />

          <Route
            path="/login"
            element={
              !user ? (
                <Login />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />

          <Route
            path="/signup"
            element={
              !user ? (
                <Signup />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              user ? (
                <DashboardPage
                  setResults={setResults}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/results"
            element={
              user ? (
                <ResultsPage
                  results={results}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/profile"
            element={
              user ? (
                <Profile />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>

        <Footer dark={dark} />
      </BrowserRouter>
    </div>
  );
}

export default App;