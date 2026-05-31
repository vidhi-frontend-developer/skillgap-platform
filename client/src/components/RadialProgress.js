// src/components/RadialProgress.js

import React from "react";

function RadialProgress({ pct }) {

  const radius = 54;

  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (pct / 100) * circumference;

  const color =
    pct >= 70
      ? "var(--success-light)"
      : pct >= 40
      ? "#F59E0B"
      : "var(--danger-light)";

  return (

    <div className="radial-progress">

      <svg
        viewBox="0 0 120 120"
        width="140"
        height="140"
      >

        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="var(--surface2)"
          strokeWidth="10"
        />

        {/* Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition:
              "stroke-dashoffset 1s ease",
          }}
        />

      </svg>

      {/* Center Text */}
      <div className="rp-text">

        <div
          className="rp-num"
          style={{ color }}
        >
          {pct}%
        </div>

        <div className="rp-label">
          Match
        </div>

      </div>

    </div>
  );
}

export default RadialProgress;