import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-indigo-500">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Secure Dashboard</h1>
        <p className="mb-8 text-gray-600">
          Your one-stop solution for secure user management.
        </p>

        <div className="space-x-4">
          <Link
            to="/login"
            className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
