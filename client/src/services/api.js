// src/services/api.js

import axios from "axios";

// Backend URL
const BASE_URL  = process.env.API_URL || "http://localhost:5000/api";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ===============================
// AUTH APIs
// ===============================

// LOGIN
export const loginUser = async (
  email,
  password
) => {
  try {
    const response = await API.post(
      "/login",
      {
        email,
        password,
      }
    );
console.log("Login Response:", BASE_URL);
    return response.data;
  } catch (error) {
    console.error(
      "Login Error:",
      error.response?.data || error.message
    );

    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Server Error",
    };
  }
};

// SIGNUP
export const signupUser = async (
  userData
) => {
  try {
    const response = await API.post(
      "/signup",
      userData
    );

    return response.data;
  } catch (error) {
    console.error(
      "Signup Error:",
      error.response?.data || error.message
    );

    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Server Error",
    };
  }
};

// ===============================
// PROFILE APIs
// ===============================

// GET PROFILE
export const getProfile = async (
  email
) => {
  try {
    const response = await API.get(
      `/profile?email=${email}`
    );

    return response.data;
  } catch (error) {
    console.error(
      "Profile Error:",
      error.response?.data || error.message
    );

    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Server Error",
    };
  }
};

// UPDATE PROFILE
export const updateProfile =
  async (userData) => {
    try {
      const response = await API.post(
        "/update-profile",
        userData
      );

      return response.data;
    } catch (error) {
      console.error(
        "Update Profile Error:",
        error.response?.data || error.message
      );

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Server Error",
      };
    }
  };

// ===============================
// SKILL ANALYZER APIs
// ===============================

// SAVE ANALYSIS
export const saveAnalysis =
  async (analysisData) => {
    try {
      const response = await API.post(
        "/save-analysis",
        analysisData
      );

      return response.data;
    } catch (error) {
      console.error(
        "Save Analysis Error:",
        error.response?.data || error.message
      );

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Server Error",
      };
    }
  };

// GET ANALYSIS HISTORY
export const getAnalysisHistory =
  async (email) => {
    try {
      const response = await API.get(
        `/analysis-history?email=${email}`
      );

      return response.data;
    } catch (error) {
      console.error(
        "Analysis History Error:",
        error.response?.data || error.message
      );

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Server Error",
      };
    }
  };

export default API;