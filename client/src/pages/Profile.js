// src/pages/Profile.js

import React, {
  useContext,
  useState,
} from "react";

import { useAuth } from "../context/AuthContext";
import bgVideo from "../assets/video1.mp4";
function Profile() {

  const { user, logout } = useAuth();

  // Editable form state
  const [formData, setFormData] =
    useState({
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "Frontend Developer",
      skills:
        user?.skills ||
        "React, JavaScript, Bootstrap",
    });

  const [message, setMessage] =
    useState("");

  // Handle input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Save profile
  const handleSave = (e) => {

    e.preventDefault();

    // Save updated user
    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    setMessage(
      "Profile updated successfully!"
    );

    // Hide message
    setTimeout(() => {
      setMessage("");
    }, 3000);

  };

  return (

  <div
    className="position-relative overflow-hidden"
    style={{
      minHeight: "100vh",
      padding: "7rem 0 4rem",
    }}
  >

    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        objectFit: "cover",
        zIndex: -3,
      }}
    >
      <source src={bgVideo} type="video/mp4" />
    </video>

    {/* Dark Overlay */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.82))",
        zIndex: -2,
      }}
    />

    {/* Gradient Glow */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(236,72,153,0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(109,40,217,0.22), transparent 30%)",
        zIndex: -1,
      }}
    />

    <div className="container">

      {/* Heading */}
      <div className="text-center mb-5">

        <div
          style={{
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "999px",
            background:
              "rgba(255,255,255,0.08)",
            color: "#ec4899",
            fontWeight: "700",
            backdropFilter: "blur(10px)",
            border:
              "1px solid rgba(255,255,255,0.1)",
            marginBottom: "1rem",
          }}
        >
          User Dashboard
        </div>

        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "#fff",
          }}
        >
          My Profile
        </h2>

        <p
          style={{
            color:
              "rgba(255,255,255,0.7)",
            fontSize: "1.1rem",
          }}
        >
          Manage your account details
        </p>

      </div>

      <div className="row justify-content-center">

        <div className="col-lg-7">

          {/* Profile Card */}
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "28px",
              background:
                "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border:
                "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.35)",
            }}
          >

            {/* Avatar */}
            <div className="text-center mb-4">

              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#6d28d9,#ec4899)",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  margin: "0 auto 1rem",

                  color: "#fff",
                  fontSize: "2.4rem",
                  fontWeight: "800",

                  boxShadow:
                    "0 8px 25px rgba(236,72,153,0.35)",
                }}
              >
                {formData.name
                  ?.charAt(0)
                  ?.toUpperCase()}
              </div>

              <h4
                style={{
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                {formData.name}
              </h4>

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.7)",
                }}
              >
                {formData.email}
              </p>

            </div>

            {/* Success Message */}
            {message && (

              <div
                style={{
                  background:
                    "rgba(16,185,129,0.12)",
                  border:
                    "1px solid rgba(16,185,129,0.25)",
                  color: "#10b981",
                  padding: "14px",
                  borderRadius: "14px",
                  marginBottom: "1.5rem",
                  fontWeight: "600",
                }}
              >
                ✅ {message}
              </div>

            )}

            {/* Form */}
            <form onSubmit={handleSave}>

              {/* Name */}
              <div className="mb-3">

                <label
                  style={{
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  style={{
                    background:
                      "rgba(255,255,255,0.08)",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: "14px",
                  }}
                />

              </div>

              {/* Email */}
              <div className="mb-3">

                <label
                  style={{
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  style={{
                    background:
                      "rgba(255,255,255,0.08)",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: "14px",
                  }}
                />

              </div>

              {/* Role */}
              <div className="mb-3">

                <label
                  style={{
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Career Role
                </label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-select"
                  style={{
                    background:
                      "rgba(255,255,255,0.08)",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: "14px",
                  }}
                >

                  <option>
                    Frontend Developer
                  </option>

                  <option>
                    Backend Developer
                  </option>

                  <option>
                    Fullstack Developer
                  </option>

                  <option>
                    Data Scientist
                  </option>

                  <option>
                    UI/UX Designer
                  </option>

                </select>

              </div>

              {/* Skills */}
              <div className="mb-4">

                <label
                  style={{
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Skills
                </label>

                <textarea
                  rows="4"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="form-control"
                  style={{
                    background:
                      "rgba(255,255,255,0.08)",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: "14px",
                  }}
                />

              </div>

              {/* Buttons */}
              <div className="d-flex gap-3">

                {/* Save */}
                <button
                  type="submit"
                  style={{
                    border: "none",
                    padding: "14px 28px",
                    borderRadius: "14px",
                    fontWeight: "700",
                    color: "#fff",
                    background:
                      "linear-gradient(135deg,#6d28d9,#ec4899)",
                    boxShadow:
                      "0 8px 20px rgba(236,72,153,0.35)",
                  }}
                >
                  Save Profile
                </button>

                {/* Logout */}
                <button
                  type="button"
                  onClick={logout}
                  style={{
                    border:
                      "1px solid rgba(255,255,255,0.15)",
                    padding: "14px 28px",
                    borderRadius: "14px",
                    fontWeight: "700",
                    color: "#fff",
                    background:
                      "rgba(255,255,255,0.08)",
                    backdropFilter:
                      "blur(10px)",
                  }}
                >
                  Logout
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  </div>

);
}

export default Profile;