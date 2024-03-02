import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  selectError,
  selectIsAuthenticated,
} from "../Features/User/userSlice";
import { Navigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const error = useSelector(selectError);

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  // Redirect to the protected page upon successful login
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);">
        <h1 className="mb-4 text-2xl font-semibold">Login</h1>

        <form>
          {isAuthenticated ? (
            <p className="text-green-500">You are already logged in!</p>
          ) : (
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
              />

              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
              />

              <button
                type="button"
                onClick={handleLogin}
                className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Login
              </button>

              {error && <p className="mt-2 text-red-500">{error}</p>}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
