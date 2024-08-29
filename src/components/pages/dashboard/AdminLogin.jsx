import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } catch (err) {
      setError(err.message); // Set error message if login fails
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
        <div className="flex-auto p-6">
          <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Welcome admin</h4>
          <p className="mb-6 text-gray-500">Please sign-in to access your account</p>

          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

          <form onSubmit={handleLogin} className="mb-4">
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                name="password"
                placeholder="············"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <button
                className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
          <Link to="/forgot-password" className="text-indigo-500 no-underline hover:text-indigo-700">
            <small>Forgot Password?</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;