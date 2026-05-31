// src/components/Footer.js

import React from "react";
import { useNavigate } from "react-router-dom";
function Footer() {
const navigate = useNavigate();
  const footerLinks = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "dashboard",
      label: "Analyzer",
    },
    {
      id: "results",
      label: "Results",
    },
  ];

  return (
    <footer className="sga-footer">

      <div className="container">

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

          {/* Left Side */}
          <div>

            <p className="mb-0">

              © 2026{" "}

              <strong
                style={{
                  color: "var(--primary-light)",
                  fontWeight: "700",
                }}
              >
                SkillGap
              </strong>

              {" "}— Bridge your career gap.

            </p>

          </div>

          {/* Right Side Navigation */}
          <div className="d-flex align-items-center gap-3">

            {footerLinks.map((link) => (

              <button
                key={link.id}
                onClick={() =>
  navigate(link.id === "home" ? "/" : `/${link.id}`)
}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--white)",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "0.2s ease",
                }}
              >
                {link.label}
              </button>

            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;