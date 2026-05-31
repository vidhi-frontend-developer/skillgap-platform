// src/pages/DashboardPage.js

import React, {
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  analyzeSkills,
  parseSkills,
} from "../utils/skillUtils";
import bgVideo from "../assets/video3.mp4";
import {
  JOB_SKILLS_DB,
} from "../utils/mockData";

function DashboardPage({
  setPage,
  setResults,
}) {
const navigate = useNavigate();
  const [skillInput, setSkillInput] =
    useState("");

  const [jobRole, setJobRole] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  // Load saved data
  useEffect(() => {

    const saved =
      localStorage.getItem("sga_last");

    if (saved) {

      const data = JSON.parse(saved);

      setSkillInput(
        data.skillInput || ""
      );

      setJobRole(
        data.jobRole || ""
      );
    }

  }, []);

  // Validation
  const validate = () => {

    const e = {};

    if (!skillInput.trim()) {
      e.skills =
        "Please enter skills";
    }

    if (!jobRole) {
      e.role =
        "Please select role";
    }

    return e;
  };

  // Analyze
  const handleAnalyze = () => {

    const validationErrors =
      validate();

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {

      const userSkills =
        parseSkills(skillInput);

      const result =
        analyzeSkills(
          userSkills,
          jobRole
        );

      localStorage.setItem(
        "sga_last",

        JSON.stringify({
          skillInput,
          jobRole,
        })
      );

      localStorage.setItem(
        "sga_results",

        JSON.stringify({
          ...result,
          jobRole,
        })
      );

      setResults({
        ...result,
        jobRole,
      });

      setLoading(false);

      navigate("/results");

    }, 1200);
  };

  const jobOptions =
    Object.keys(JOB_SKILLS_DB);

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
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75))",
        zIndex: -2,
      }}
    />

    {/* Glow Effect */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(236,72,153,0.25), transparent 35%), radial-gradient(circle at bottom right, rgba(109,40,217,0.25), transparent 35%)",
        zIndex: -1,
      }}
    />

    <div className="container">

      <div className="row justify-content-center">

        <div className="col-lg-7">

          {/* Header */}
          <div className="text-center mb-5">

            <h2
              className="hero-title"
              style={{
                color: "#fff",
                fontWeight: "800",
                fontSize: "3rem",
              }}
            >
              Skill Analyzer
            </h2>

            <p
              className="hero-subtitle"
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.1rem",
              }}
            >
              Enter your skills and
              target role to get
              personalized analysis.
            </p>

          </div>

          {/* Card */}
          <div
            className="sga-card"
            style={{
              padding: "2rem",
              background:
                "rgba(255,255,255,0.08)",
              backdropFilter: "blur(18px)",
              border:
                "1px solid rgba(255,255,255,0.12)",
              borderRadius: "24px",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.35)",
            }}
          >

            {/* Skills */}
            <div className="mb-4">

              <label
                className="form-label-custom"
                style={{
                  color: "#fff",
                  marginBottom: "0.8rem",
                }}
              >
                Your Skills
              </label>

              <textarea
                rows="4"
                className="form-control-custom"
                placeholder="React, JavaScript, CSS..."
                value={skillInput}
                onChange={(e) =>
                  setSkillInput(
                    e.target.value
                  )
                }
                style={{
                  background:
                    "rgba(255,255,255,0.08)",
                  border:
                    "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  borderRadius: "14px",
                  padding: "14px",
                }}
              />

              {errors.skills && (

                <p
                  style={{
                    color: "#ff6b81",
                    marginTop: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {errors.skills}
                </p>

              )}

            </div>

            {/* Role */}
            <div className="mb-4">

              <label
                className="form-label-custom"
                style={{
                  color: "#fff",
                  marginBottom: "0.8rem",
                }}
              >
                Job Role
              </label>

              <select
                className="form-select-custom"
                value={jobRole}
                onChange={(e) =>
                  setJobRole(
                    e.target.value
                  )
                }
                style={{
                  background:
                    "rgba(255,255,255,0.08)",
                  border:
                    "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  borderRadius: "14px",
                  padding: "14px",
                }}
              >

                <option
                  value=""
                  style={{
                    color: "#000",
                  }}
                >
                  Select Role
                </option>

                {jobOptions.map(
                  (role, index) => (

                    <option
                      key={index}
                      value={role}
                      style={{
                        color: "#000",
                      }}
                    >
                      {role}
                    </option>

                  )
                )}

              </select>

              {errors.role && (

                <p
                  style={{
                    color: "#ff6b81",
                    marginTop: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {errors.role}
                </p>

              )}

            </div>

            {/* Button */}
            <button
              className="btn-primary-custom"
              onClick={handleAnalyze}
              disabled={loading}
              style={{
                width: "100%",
                border: "none",
                borderRadius: "14px",
                padding: "14px",
                fontWeight: "700",
                color: "#fff",
                background:
                  "linear-gradient(135deg,#6d28d9,#ec4899)",
                boxShadow:
                  "0 8px 20px rgba(236,72,153,0.35)",
              }}
            >

              {loading
                ? "Analyzing..."
                : "Analyze Skills"}

            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
);
}

export default DashboardPage;