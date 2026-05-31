import { useState, useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/video1.mp4";

export default function Login() {
  const { login } = useAuth();
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // API CALL
      const response =
        await loginUser(
          formData.email,
          formData.password
        );

      if (response.success) {

        // Save User In Context
        login(response.user);

      } else {

        setError(response.message);

      }

    } catch (err) {

      setError("Server error");

    } finally {

      setLoading(false);

    }
  };

  return (
  <div
    className="container-fluid d-flex align-items-center justify-content-center position-relative overflow-hidden"
    style={{
      minHeight: "100vh",
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
        zIndex: -2,
      }}
    >
      <source src={bgVideo} type="video/mp4" />
    </video>

    {/* Dark Overlay */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        background: "rgba(0,0,0,0.55)",
        zIndex: -1,
      }}
    />

    <div className="row w-100 justify-content-center">
      <div className="col-md-5 col-lg-4">

        {/* Card */}
        <div
          className="card border-0 shadow-lg"
          style={{
            borderRadius: "25px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >

          {/* Header */}
          <div
            className="text-center p-4"
            style={{
              background:
                "linear-gradient(135deg,#6d28d9,#ec4899)",
              color: "#fff",
            }}
          >
            <h2 className="fw-bold mb-1">
              Welcome Back
            </h2>

            <p className="mb-0">
              Login to SkillGap Analyzer
            </p>
          </div>

          {/* Body */}
          <div className="card-body p-4">

            {/* Error */}
            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn w-100 btn-lg fw-bold"
                disabled={loading}
                style={{
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,#6d28d9,#ec4899)",
                  border: "none",
                  color: "#fff",
                }}
              >
                {loading
                  ? "Logging In..."
                  : "Login"}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="mb-0 text-white">
                Don't have an account?{" "}

                <button
                  className="btn btn-link text-decoration-none fw-bold"
                  onClick={() => navigate("/signup")}
                  style={{ color: "#ff7ad9" }}
                >
                  Sign Up
                </button>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
)}

