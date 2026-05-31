// src/components/Navbar.js

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({
  page,
  setPage,
  dark,
  setDark,
}) {

  const { user, logout } =
    useAuth();

  const navigate =
    useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const handleLogout = () => {

    logout();
    navigate("/login");
    setMenuOpen(false);

  };

  return (

    <>

      {/* Navbar */}
      <nav
        style={{
          width: "100%",
          boxSizing: "border-box",

          padding: "10px 15px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          position: "fixed",
          top: 0,
          left: 0,

          zIndex: 1000,

          backdropFilter: "blur(16px)",

          background: dark
            ? "transparent"
            : "rgba(255,255,255,0.08)",

          borderBottom: dark
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.08)",
        }}
      >

        {/* Logo */}
        <img
          src={logo}
          alt="SkillGap Logo"
          onClick={() => navigate("/")}
          style={{
            height: "60px",
            cursor: "pointer",
            objectFit: "contain",
          }}
        />

        {/* Desktop Menu */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >

          <button
            onClick={() => navigate("/")}
            style={navBtnStyle(
              page === "home",
              dark
            )}
          >
            Home
          </button>

          {user && (

            <>

              <button
                onClick={() =>
                  navigate("/dashboard")
                }
                style={navBtnStyle(
                  page === "dashboard",
                  dark
                )}
              >
                Dashboard
              </button>

              <button
                onClick={() =>
                  navigate("/results")
                }
                style={navBtnStyle(
                  page === "results",
                  dark
                )}
              >
                Results
              </button>

              <button
                onClick={() =>
                  navigate("/profile")
                }
                style={navBtnStyle(
                  page === "profile",
                  dark
                )}
              >
                Profile
              </button>

            </>

          )}

          {/* Guest Buttons */}
          {!user ? (

            <>

              <button
                onClick={() =>
                  navigate("/login")
                }
                style={navBtnStyle(
                  page === "login",
                  dark
                )}
              >
                Login
              </button>

              <button
                onClick={() =>
                  navigate("/signup")
                }
                style={{
                  padding: "10px 18px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",

                  background:
                    "linear-gradient(135deg,#6d28d9,#ec4899)",

                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Signup
              </button>

            </>

          ) : (

            <button
              onClick={handleLogout}
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",

                background: "#d80404",

                color: "#fff",
                fontWeight: 600,
              }}
            >
              Logout
            </button>

          )}

          {/* Theme Button */}
          <button
            onClick={() =>
              setDark(!dark)
            }
            style={{
              padding: "10px 18px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",

              background: dark
                ? "linear-gradient(135deg,#6d28d9,#ec4899)"
                : "linear-gradient(135deg,#6f42c1,#ff3c3c)",

              color: "#fff",
              fontWeight: 600,
            }}
          >
            {dark
              ? "🌙 Dark"
              : "☀️ Light"}
          </button>

        </div>

        {/* Mobile Hamburger */}
        <div
          className="mobile-menu-btn"
          onClick={() =>
            setMenuOpen(true)
          }
          style={{
            display: "none",
            cursor: "pointer",
          }}
        >

          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>

        </div>

      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`mobile-sidebar ${
          menuOpen
            ? "open"
            : ""
        }`}
      >

        {/* Close Button */}
        <button
          onClick={() =>
            setMenuOpen(false)
          }
          style={{
            position: "absolute",
            top: "25px",
            right: "25px",

            background: "none",
            border: "none",

            color: "#fff",
            fontSize: "2rem",

            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* Mobile Menu */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",

            gap: "24px",
          }}
        >

          <button
            className="mobile-nav-btn"
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          >
            Home
          </button>

          {user && (

            <>

              <button
                className="mobile-nav-btn"
                onClick={() => {
                  navigate("/dashboard");
                  setMenuOpen(false);
                }}
              >
                Dashboard
              </button>

              <button
                className="mobile-nav-btn"
                onClick={() => {
                  navigate("/results");
                  setMenuOpen(false);
                }}
              >
                Results
              </button>

              <button
                className="mobile-nav-btn"
                onClick={() => {
                  navigate("/profile");
                  setMenuOpen(false);
                }}
              >
                Profile
              </button>

            </>

          )}

          {!user ? (

            <>

              <button
                className="mobile-nav-btn"
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
              >
                Login
              </button>

              <button
                className="mobile-nav-btn"
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
              >
                Signup
              </button>

            </>

          ) : (

            <button
              className="mobile-nav-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          )}

          {/* Theme Button */}
          <button
            onClick={() =>
              setDark(!dark)
            }
            style={{
              border: "none",

              padding: "14px 28px",

              borderRadius: "14px",

              background:
                "linear-gradient(135deg,#6d28d9,#ec4899)",

              color: "#fff",

              fontWeight: "700",
            }}
          >
            {dark
              ? "🌙 Dark"
              : "☀️ Light"}
          </button>

        </div>

      </div>

      {/* Internal CSS */}
      <style>{`

        .hamburger-line{

          width:28px;
          height:3px;

          background:#fff;

          margin:5px 0;

          border-radius:10px;
        }

        .mobile-sidebar{

          position:fixed;

          top:0;
          left:0;

          width:100%;
          height:100vh;

          z-index:2000;

          display:flex;
          align-items:center;
          justify-content:center;

          background:
          linear-gradient(
            135deg,
            rgba(15,23,42,0.98),
            rgba(88,28,135,0.98)
          );

          backdrop-filter:blur(18px);

          transform:translateX(-100%);

          transition:0.45s ease;
        }

        .mobile-sidebar.open{
          transform:translateX(0);
        }

        .mobile-nav-btn{

          border:none;
          background:none;

          color:#fff;

          font-size:2rem;
          font-weight:800;

          transition:0.3s;

          cursor:pointer;
        }

        .mobile-nav-btn:hover{

          transform:scale(1.05);

          color:#ec4899;
        }

        @media (max-width:939px){

          .desktop-menu{
            display:none !important;
          }

          .mobile-menu-btn{
            display:block !important;
          }

          nav{
             padding: 5px 20px 5px 12px !important;
          }

        }

      `}</style>

    </>

  );
}

/* Button Style */
const navBtnStyle = (
  active,
  dark
) => ({

  padding: "10px 18px",

  borderRadius: "12px",

  border: "none",

  cursor: "pointer",

  background: active
    ? "linear-gradient(135deg,#6d28d9,#ec4899)"
    : "rgba(255,255,255,0.08)",

  backdropFilter: "blur(10px)",

  border:
    "1px solid rgba(255,255,255,0.08)",

  color: active
    ? "#fff"
    : "#fff",

  fontWeight: 600,

  transition: "0.3s",
});

export default Navbar;