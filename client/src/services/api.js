// src/services/api.js

import axios from "axios";

// Backend Base URL
const API = axios.create({
  baseURL: "http://localhost/server/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ===============================
// AUTH APIs
// ===============================

// LOGIN API
export const loginUser = async (
  email,
  password
) => {

  try {

    const response =
      await API.post(
        "/login.php",
        {
          email,
          password,
        }
      );

    return response.data;

  } catch (error) {

    console.error(
      "Login Error:",
      error
    );

    return {
      success: false,
      message:
        "Server Error",
    };

  }

};

// SIGNUP API
export const signupUser = async (
  userData
) => {

  try {

    const response =
      await API.post(
        "/signup.php",
        userData
      );

    return response.data;

  } catch (error) {

    console.error(
      "Signup Error:",
      error
    );

    return {
      success: false,
      message:
        "Server Error",
    };

  }

};

// ===============================
// PROFILE APIs
// ===============================

// GET PROFILE
export const getProfile =
  async (email) => {

    try {

      const response =
        await API.get(
          `/profile.php?email=${email}`
        );

      return response.data;

    } catch (error) {

      console.error(
        "Profile Error:",
        error
      );

      return {
        success: false,
        message:
          "Server Error",
      };

    }

  };

// UPDATE PROFILE
export const updateProfile =
  async (userData) => {

    try {

      const response =
        await API.post(
          "/update-profile.php",
          userData
        );

      return response.data;

    } catch (error) {

      console.error(
        "Update Error:",
        error
      );

      return {
        success: false,
        message:
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

      const response =
        await API.post(
          "/save-analysis.php",
          analysisData
        );

      return response.data;

    } catch (error) {

      console.error(
        "Save Analysis Error:",
        error
      );

      return {
        success: false,
        message:
          "Server Error",
      };

    }

  };

// GET USER ANALYSIS HISTORY
export const getAnalysisHistory =
  async (email) => {

    try {

      const response =
        await API.get(
          `/analysis-history.php?email=${email}`
        );

      return response.data;

    } catch (error) {

      console.error(
        "History Error:",
        error
      );

      return {
        success: false,
        message:
          "Server Error",
      };

    }

  };

export default API;