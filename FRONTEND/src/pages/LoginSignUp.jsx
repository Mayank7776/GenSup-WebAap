import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { motion, AnimatePresence } from 'framer-motion';

const LoginSignUp = () => {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    profilepic: null, // lowercase
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);

    if (isSignup) {
      formDataToSend.append("fullName", formData.fullName);
      if (formData.profilepic) {
        formDataToSend.append("profilePic", formData.profilepic); // ✅ matches multer field name
      }
    }

    try {
      const endpoint = isSignup
        ? "http://localhost:3000/api/userAuth/Register"
        : "http://localhost:3000/api/userAuth/Login";

      const response = await axios.post(endpoint, formDataToSend, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Success:", response.data);
      navigate("/");

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="h-full min-h-[50vh] bg-gradient-to-br from-black-100 via-white to-pink-100 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-black tracking-wide">
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <AnimatePresence>
            {isSignup && (
              <motion.div
                key="fullName"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                  required
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              required
            />
          </div>

          <AnimatePresence>
            {isSignup && (
              <motion.div
                key="profilepic"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                <input
                  type="file"
                  name="profilepic"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-xl p-1 bg-white"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-black to-white text-white font-medium py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </motion.button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-black font-semibold hover:underline transition"
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginSignUp;
