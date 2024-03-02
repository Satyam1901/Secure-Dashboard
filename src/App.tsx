import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import LoginPage from "./Pages/Signin";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Pages/PrivateRoute";
import DashboardPage from "./Pages/Dashboard";
import HomePage from "./Pages/Home";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardPage />} path="/dashboard" />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
