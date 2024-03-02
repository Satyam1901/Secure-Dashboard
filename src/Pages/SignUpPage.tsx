import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signup,
  selectError,
  selectIsAuthenticated,
} from "../Features/User/userSlice";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const error = useSelector(selectError);

  const handleSignUp = () => {
    dispatch(signup({ email, password }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h1 className="mb-4 text-2xl font-semibold">Sign Up</h1>
        {!isAuthenticated && (
          <div>
            <label className="block mb-2">
              Email:
              <input
                className="w-full px-3 py-2 border rounded"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block mb-2">
              Password:
              <input
                className="w-full px-3 py-2 border rounded"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
