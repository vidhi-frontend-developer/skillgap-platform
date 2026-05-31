// src/pages/ResultsPage.js

import React, {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/video-file.mp4";
import ResultCard from "../components/ResultCard";

function ResultsPage({
  results,
}) {

  const navigate = useNavigate();

  const [animated, setAnimated] =
    useState(false);

  // Animation
  useEffect(() => {

    const timer = setTimeout(() => {

      setAnimated(true);

    }, 200);

    return () => clearTimeout(timer);

  }, []);

  // Load Results
  const data =
    results ||
    JSON.parse(
      localStorage.getItem(
        "sga_results"
      )
    );

  // No Data Found
  if (!data) {

    return (

      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#0f172a,#111827)",
          color: "#fff",
        }}
      >

        <div className="text-center">

          <h2
            style={{
              fontWeight: "800",
            }}
          >
            No Results Found
          </h2>

          <p
            style={{
              color:
                "rgba(255,255,255,0.7)",
            }}
          >
            Please analyze your skills first.
          </p>

          <button
            onClick={() =>
              navigate("/dashboard")
            }
            style={{
              border: "none",
              padding: "12px 24px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg,#6d28d9,#ec4899)",
              color: "#fff",
              fontWeight: "700",
              marginTop: "1rem",
            }}
          >
            Go To Dashboard
          </button>

        </div>

      </div>

    );
  }

  // Extract Data
  const {
    matched,
    missing,
    total,
    percentage,
    jobRole,
  } = data;

  // Score Color
  const scoreColor =
    percentage >= 70
      ? "#10b981"
      : percentage >= 40
      ? "#F59E0B"
      : "#ef4444";

  // Message
  const scoreMessage =
    percentage >= 70
      ? "Excellent match for this role!"
      : percentage >= 40
      ? "Good progress. Improve missing skills."
      : "You need more skills for this role.";

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

      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.82))",
          zIndex: -2,
        }}
      />

      {/* Glow Layer */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(236,72,153,0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(109,40,217,0.22), transparent 30%)",
          zIndex: -1,
        }}
      />

      <div className="container">

        {/* Back Button */}
        <button
          className="mb-4"
          onClick={() =>
            navigate("/dashboard")
          }
          style={{
            border: "none",
            padding: "10px 18px",
            borderRadius: "12px",
            background:
              "rgba(255,255,255,0.08)",
            color: "#fff",
            backdropFilter: "blur(10px)",
            border:
              "1px solid rgba(255,255,255,0.1)",
          }}
        >
          ← Back
        </button>

        {/* Summary Card */}
        <div
          className="mb-4"
          style={{
            padding: "2rem",
            borderRadius: "24px",
            background:
              "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            border:
              "1px solid rgba(255,255,255,0.12)",
            boxShadow:
              "0 8px 40px rgba(0,0,0,0.35)",
          }}
        >

          <div className="row align-items-center gy-4">

            {/* Left */}
            <div className="col-lg-8">

              <h2
                style={{
                  fontSize: "2.7rem",
                  fontWeight: "800",
                  color: "#fff",
                }}
              >
                {jobRole}
              </h2>

              <p
                style={{
                  color:
                    "rgba(255,255,255,0.75)",
                  marginTop: "0.5rem",
                }}
              >
                {matched.length} of {total} skills matched
              </p>

              {/* Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: "12px",
                  background:
                    "rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  overflow: "hidden",
                  marginTop: "1rem",
                }}
              >

                <div
                  style={{
                    width: animated
                      ? `${percentage}%`
                      : "0%",
                    height: "100%",
                    background:
                      "linear-gradient(135deg,#6d28d9,#ec4899)",
                    transition:
                      "width 1.2s ease",
                  }}
                />

              </div>

              <div
                style={{
                  marginTop: "1rem",
                  color: scoreColor,
                  fontWeight: "700",
                  fontSize: "1.05rem",
                }}
              >
                {scoreMessage}
              </div>

            </div>

            {/* Right */}
            <div className="col-lg-4 d-flex justify-content-center">

              {/* Circular Progress */}
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  position: "relative",
                }}
              >

                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  style={{
                    transform:
                      "rotate(-90deg)",
                  }}
                >

                  {/* Background */}
                  <circle
                    cx="90"
                    cy="90"
                    r="70"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="14"
                    fill="none"
                  />

                  {/* Progress */}
                  <circle
                    cx="90"
                    cy="90"
                    r="70"
                    stroke="url(#gradient)"
                    strokeWidth="14"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={
                      2 * Math.PI * 70
                    }
                    strokeDashoffset={
                      2 *
                      Math.PI *
                      70 *
                      (1 -
                        (animated
                          ? percentage
                          : 0) /
                          100)
                    }
                    style={{
                      transition:
                        "stroke-dashoffset 1.2s ease",
                    }}
                  />

                  {/* Gradient */}
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#6d28d9"
                      />
                      <stop
                        offset="100%"
                        stopColor="#ec4899"
                      />
                    </linearGradient>
                  </defs>

                </svg>

                {/* Center */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform:
                      "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >

                  <h2
                    style={{
                      color: "#fff",
                      fontWeight: "800",
                      margin: 0,
                    }}
                  >
                    {percentage}%
                  </h2>

                  <p
                    style={{
                      color:
                        "rgba(255,255,255,0.7)",
                      margin: 0,
                      fontSize: "0.9rem",
                    }}
                  >
                    Match
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="row gy-4 mb-4">

          {[
            {
              title: "Total Skills",
              value: total,
              color: "#fff",
            },
            {
              title: "Matched",
              value: matched.length,
              color: "#10b981",
            },
            {
              title: "Missing",
              value: missing.length,
              color: "#ef4444",
            },
            {
              title: "Match Score",
              value: `${percentage}%`,
              color: "#ec4899",
            },
          ].map((item, index) => (

            <div
              className="col-md-3"
              key={index}
            >

              <div
                className="text-center"
                style={{
                  padding: "1.5rem",
                  borderRadius: "20px",
                  background:
                    "rgba(255,255,255,0.08)",
                  backdropFilter:
                    "blur(14px)",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                }}
              >

                <h3
                  style={{
                    color: item.color,
                    fontWeight: "800",
                  }}
                >
                  {item.value}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color:
                      "rgba(255,255,255,0.7)",
                  }}
                >
                  {item.title}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Result Cards */}
        <div className="row gy-4">

          {/* Matched */}
          <div className="col-lg-6">

            <ResultCard
              title="Matched Skills"
              skills={matched}
              type="matched"
            />

          </div>

          {/* Missing */}
          <div className="col-lg-6">

            <ResultCard
              title="Missing Skills"
              skills={missing}
              type="missing"
            />

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-5">

          <button
            onClick={() =>
              navigate("/dashboard")
            }
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
            Analyze Another Role
          </button>

        </div>

      </div>

    </div>

  );
}

export default ResultsPage;