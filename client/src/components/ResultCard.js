// src/components/ResultCard.js

import React from "react";

function ResultCard({
  title,
  skills,
  type,
}) {

  const isMatched =
    type === "matched";

  return (

    <div
      className="sga-card"
      style={{
        padding: "1.5rem",
        height: "100%",
      }}
    >

      {/* Header */}
      <div
        className="d-flex align-items-center justify-content-between mb-3"
      >

        <h5
          style={{
            fontWeight: "700",
            margin: 0,
          }}
        >
          {title}
        </h5>

        <span
          style={{
            background: isMatched
              ? "rgba(5,150,105,0.12)"
              : "rgba(220,38,38,0.1)",

            color: isMatched
              ? "var(--success-light)"
              : "var(--danger-light)",

            padding: "0.3rem 0.8rem",

            borderRadius: "999px",

            fontSize: "0.8rem",

            fontWeight: "700",
          }}
        >
          {skills.length}
        </span>

      </div>

      {/* Skills */}
      {skills.length === 0 ? (

        <p
          style={{
            color: "var(--muted)",
            marginBottom: 0,
          }}
        >
          No skills found.
        </p>

      ) : (

        <div className="tag-cloud">

          {skills.map((skill, index) => (

            <span
              key={index}
              className={`skill-badge ${
                isMatched
                  ? "badge-matched"
                  : "badge-missing"
              }`}
            >
              {isMatched ? "✓" : "✕"} {skill}
            </span>

          ))}

        </div>

      )}

    </div>
  );
}

export default ResultCard;